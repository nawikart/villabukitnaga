<template>
    <a-spin :spinning="loading" tip="Loading...">
      <a-form :form="form" @submit="handleSubmit">
        <h3>{{ ($route.name == 'formAdd') ? 'Add Form' : 'Edit Form' }}</h3>


        <SPAN v-for="(fItem, i) in formItems" :key="'fItem'+ i">
          <hr v-if="fItem.type == 'divider'" />
          <a-form-item
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
              :label="fItem.label">

              <a-input size="large" v-if="fItem.type == 'input'"
                v-model="data[fItem.model]"/>
              <a-input size="large" v-if="fItem.type == 'password'"
                v-model="data[fItem.model]"/>

              <a-card v-if="fItem.type == 'inputMultiple'">
                <a-row v-for="(i, index) in data[fItem.model]" :key="index" style="margin: 10px 0;">
                    <a-col :span="23">
                      <a-select size="small" v-model="data[fItem.model][index]">
                        <a-select-option :value="opt['key']" v-for="(opt, oi) in fItem.options" :key="oi">
                          {{ opt['text'] }}
                        </a-select-option>
                      </a-select>
                    </a-col>
                    <a-col :span="1">
                        <a-icon v-on:click="data[fItem.model] = removeArray(data[fItem.model], index)" size="small" type="delete" style="cursor:pointer;"></a-icon>
                    </a-col>
                </a-row>          
                <!-- <a-input v-for="(i, index) in data[fItem.model]" :key="index" size="small" v-model="data[fItem.model][index]" style="margin: 6px 0;"/>  -->
                <a-button v-on:click="data[fItem.model].push('')" type="primary" size="small">
                  <a-icon type="plus"></a-icon>
                </a-button>               
              </a-card>

              <a-card v-if="fItem.type == 'inputGroup'">
                <a-form-item v-for="(i, index) in fItem.items" :key="index"
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    :label="i.lbl">   
                      <!-- <a-input size="small" :v-model="(data[fItem.model]) ? data[fItem.model][gm.model] : ''" style="margin: 6px 0;"/>              -->
                      <a-input v-if="data[fItem.model]" size="small" v-model="data[fItem.model][gm.model]" style="margin: 6px 0;"/>             
                </a-form-item>
              </a-card>

              <a-select size="large" v-if="fItem.type == 'select'"
                  v-model="data[fItem.model]">
                <a-select-option :value="opt[fItem.optValue]" v-for="(opt, oi) in (fItem.options) ? fItem.options : selectData[fItem.key]" :key="oi">
                  {{ opt[fItem.optLabel] }}
                </a-select-option>
              </a-select>

              <a-textarea v-if="fItem.type == 'textarea'"
                  v-model="data[fItem.model]" :autosize="{ minRows: 8, maxRows: 25 }" size="large" />

              <span v-if="fItem.type == 'image'">
                <!-- {{ fItem.fileList }} -->
                <input type="file" :id="fItem.model" multiple v-on:change="handleFilesUpload(fItem.model)" style="display: none;" />
                <p><a-button type="dashed" icon="upload" :loading="fItem.loading" v-on:click="addFiles(fItem.model)"></a-button></p>
                <span>
                  <div class="ant-upload-list ant-upload-list-picture-card">
                    <div v-for="(f, i) in fItem.fileList" :key="i" :data="JSON.stringify(fItem.fileList)" :index="i" draggable="true" v-on:dragstart="drag($event)" v-on:drop="fItem.fileList = drop($event)" v-on:dragover="allowDrop($event)" class="ant-upload-list-item ant-upload-list-item-done">
                      <div class="ant-upload-list-item-info">
                        <span>
                          <a :href="f.url" target="_blank" rel="noopener noreferrer" class="ant-upload-list-item-thumbnail">
                            <img :src="f.url" :alt="f.name">
                          </a>
                          <a target="_blank" rel="noopener noreferrer" :title="f.name" :href="f.url" class="ant-upload-list-item-name">{{ f.name }}</a>
                        </span>
                      </div>
                      <span class="ant-upload-list-item-actions">
                        <a-icon v-on:click="previewVisible=true, previewImage=f.url" type="eye" class="anticon anticon-eye-o"></a-icon>
                        <a-icon type="delete" v-on:click="fItem.fileDeleted.push(f.name), fItem.fileList = removeArray(fItem.fileList, i)" class="anticon anticon-delete"></a-icon>
                        <a-icon type="drag" class="anticon anticon-eye-o" style="cursor:move;"></a-icon>
                      </span>
                    </div>
                  </div>
                </span>
                <a-modal :visible="previewVisible" maskClosable :footer="null" @cancel="previewVisible = false">
                  <img alt="example" style="width: 100%" :src="previewImage" />
                </a-modal>

              </span>

              <!-- <div v-if="fItem.type == 'groupMultiple'">
                  {{ data[fItem.model] }}
                  <a-card v-for="(g, gi) in data[fItem.model]" :key="'gi'+ gi" style="margin-bottom: 6px;">
                    <a-form-item v-for="(gm, gmi) in fItem.items" :key="'gm'+gmi"
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        :label="gm.label">
                                  <a-input v-if="gm.type == 'input'" v-model="g[gm.model]" style="margin: 6px 0;"/> 

                                  <a-textarea v-if="gm.type == 'textarea'" v-model="g[gm.model]"
                                      :autosize="{ minRows: 3, maxRows: 10 }" size="large" />

                                  <span v-if="gm.type == 'image'">{{ i }} -- {{ gi }} -- {{ gmi }} -- {{ gm.model }}
                                    <input type="file" :id="gm.model + i.toString() + '_' + gi.toString() + '_' + gmi.toString()" multiple v-on:change="handleFilesUpload2(i, gi, gmi)" style="display: none;" />
                                    <p><a-button type="dashed" icon="upload" :loading="i.loading" v-on:click="addFiles(gm.model + i.toString() + '_' + gi.toString() + '_' + gmi.toString())"></a-button></p>
                                    <span>
                                      <div class="ant-upload-list ant-upload-list-picture-card">
                                        <div v-for="(f, i) in i.fileList" :key="i" :data="JSON.stringify(i.fileList)" :index="i" draggable="true" v-on:dragstart="drag($event)" v-on:drop="i.fileList = drop($event)" v-on:dragover="allowDrop($event)" class="ant-upload-list-item ant-upload-list-item-done">
                                          <div class="ant-upload-list-item-info">
                                            <span>
                                              <a :href="f.url" target="_blank" rel="noopener noreferrer" class="ant-upload-list-item-thumbnail">
                                                <img :src="f.url" :alt="f.name">
                                              </a>
                                              <a target="_blank" rel="noopener noreferrer" :title="f.name" :href="f.url" class="ant-upload-list-item-name">{{ f.name }}</a>
                                            </span>
                                          </div>
                                          <span class="ant-upload-list-item-actions">
                                            <a-icon v-on:click="previewVisible=true, previewImage=f.url" type="eye" class="anticon anticon-eye-o"></a-icon>
                                            <a-icon type="delete" v-on:click="i.fileDeleted.push(f.name), i.fileList = removeArray(i.fileList, i)" class="anticon anticon-delete"></a-icon>
                                            <a-icon type="drag" class="anticon anticon-eye-o" style="cursor:move;"></a-icon>
                                          </span>
                                        </div>
                                      </div>
                                    </span>
                                    <a-modal :visible="previewVisible" maskClosable :footer="null" @cancel="previewVisible = false">
                                      <img alt="example" style="width: 100%" :src="previewImage" />
                                    </a-modal>

                                  </span>
                    </a-form-item>
                  </a-card>
                  <a-button v-on:click="data[fItem.model].push({})" type="primary" size="small">
                    <a-icon type="plus"></a-icon>
                  </a-button>                
              </div> -->

          </a-form-item>
        </SPAN>

        
        <!-- v-if="$route.name == 'formAdd'" -->
        <a-form-item
          :wrapper-col="{ span: 12, offset: 5 }">
          <a-button block
            size="large"
            type="primary"
            html-type="submit">
            Save
          </a-button>
        </a-form-item>
                  
      </a-form>
    </a-spin>
</template>
<script>
import axios from 'axios'
export default {
  props: { postType: String, formItems: Array, apiPath: Object, listPath: String },
  data () {
    return {
      loading: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },      
      data: {items: []},
      form: this.$form.createForm(this),

      selectData: {users: [], bengkels: [], promos: [], plans: [], timeslots: []}, 

      // upload image
      addImgLoading: false,
      previewVisible: false,
      previewImage: '',
      tempPhoto: {image: {}},
      deleteImgOnModel: '',
      previewVisible: false,
      previewImage: null
      //////////////////              
    };
  },  
  watch: {
    $route: function (val) { 
      if(this.$route.name == 'formAdd'){
        this.data = {}
      }else{
        this.loadData()
      }       
    }    
  },
  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },

    drag(ev) {
      var fromIndex = ev.target.getAttribute("index")
      ev.dataTransfer.setData("fromIndex", fromIndex);
    },

    drop(ev) {
      ev.preventDefault();      
      var fromIndex = ev.dataTransfer.getData("fromIndex");
      var toIndex = ev.currentTarget.getAttribute("index")

      var data = JSON.parse(ev.currentTarget.getAttribute("data"))
      var dataFrom = data[fromIndex]

      data[fromIndex] = data[toIndex]
      data[toIndex] = dataFrom

      console.log(data)

      return data 
    },    
    removeArray(array, index){
      var newArray = []
      for(let i=0; i<array.length; i++){
        if(i != index){
          newArray.push(array[i])
        }
      }
      return newArray
    },
    handleSubmitContentJson(e){
      e.preventDefault();
      console.log(this.data)
      return false
      
      this.form.validateFields((err, values) => {
        if (!err) {
          let formData = new FormData()
          for(let i=0; i<this.formItems.length; i++){
            if(this.formItems[i].type == 'inputGroup' || this.formItems[i].type == 'inputMultiple'){

              formData.append(this.formItems[i].model, JSON.stringify(this.data[this.formItems[i].model]))

            }else if(this.formItems[i].type == 'image'){
              
                for(let f=0; f<this.formItems[i].fileList.length; f++){
                  if(this.formItems[i].fileList[f].file){
                    formData.append(this.formItems[i].model, this.formItems[i].fileList[f].file)
                  }else{
                    formData.append(this.formItems[i].model +'OLD', this.formItems[i].fileList[f].name)
                  }
                }
                for(let f=0; f<this.formItems[i].fileDeleted.length; f++){
                  formData.append(this.formItems[i].model +'DELETED', this.formItems[i].fileDeleted[f])
                }

            }else{

              formData.append(this.formItems[i].model, this.data[this.formItems[i].model])
            }
          }
          
            const axithis = this
            this.loading = true
            axios.post((this.$route.query.uuid) ? this.apiPath.update : this.apiPath.create,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: 'Bearer ' + localStorage.getItem('jwtoken')
                }
              }
            ).then(function (response) {
              // console.log(response.data)
              axithis.loading = false
              if(response.data.error){
                alert(JSON.stringify(response.data.error.Message))
              }else{              
                window.location = '/admiin' + axithis.listPath
              }
            })
              .catch(function (err) {         
                console.log(err)
                axithis.loading = false
              })
        }
      })
    },
    handleSubmit(e){
      e.preventDefault();
      if(this.postType=='formData'){
        this.handleSubmitFormData()
      }else{
        this.handleSubmitJsonData()
      }
    },
    handleSubmitFormData(){
      this.form.validateFields((err, values) => {
        if (!err) {
          let formData = new FormData()
          for(let i=0; i<this.formItems.length; i++){
            if(this.formItems[i].type == 'inputGroup' || this.formItems[i].type == 'inputMultiple'){

              formData.append(this.formItems[i].model, JSON.stringify(this.data[this.formItems[i].model]))

            }else if(this.formItems[i].type == 'image'){
              
                for(let f=0; f<this.formItems[i].fileList.length; f++){
                  if(this.formItems[i].fileList[f].file){
                    formData.append(this.formItems[i].model, this.formItems[i].fileList[f].file)
                  }else{
                    formData.append(this.formItems[i].model +'OLD', this.formItems[i].fileList[f].name)
                  }
                }
                for(let f=0; f<this.formItems[i].fileDeleted.length; f++){
                  formData.append(this.formItems[i].model +'DELETED', this.formItems[i].fileDeleted[f])
                }

            }else if(this.formItems[i].type != 'divider'){

              formData.append(this.formItems[i].model, this.data[this.formItems[i].model])
            }
          }
          
            const axithis = this
            this.loading = true
            // alert((this.$route.query.uuid) ? this.apiPath.update : this.apiPath.create)
            axios.post((this.$route.query.uuid) ? this.apiPath.update : this.apiPath.create,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: 'Bearer ' + localStorage.getItem('jwtoken')
                }
              }
            ).then(function (response) {
              // console.log(response.data)
              axithis.loading = false
              if(response.data.error){
                alert(JSON.stringify(response.data.error.Message))
              }else{              
                window.location = '/admiin' + axithis.listPath
              }
            })
              .catch(function (err) {         
                console.log(err)
                axithis.loading = false
              })
        }
      })
    },
    handleSubmitJsonData(){
      this.form.validateFields((err, values) => {
        if (!err) {
            const axithis = this
            this.loading = true
            axios.post((this.$route.query.uuid) ? this.apiPath.update : this.apiPath.create,
              this.data,
              {
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('jwtoken')
                }
              }
            ).then(function (response) {
              // console.log(response.data.error.Message)
              axithis.loading = false
              if(response.data.error){
                alert(JSON.stringify(response.data.error.Message))
              }else{              
                window.location = '/admiin' + axithis.listPath
              }
            })
              .catch(function (err) {
                console.log(err)
                axithis.loading = false
              })
        }
      })
    }, 
    loadData () {
      const axithis = this
      this.loading = true
      
      axios.get(this.apiPath.read,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwtoken')
          }
        }      
      ).then(function (response) {
        // console.log(response.data)
        axithis.data = response.data
        for(let i=0; i<axithis.formItems.length; i++){
          if(axithis.formItems[i].type == 'image'){
            // if(axithis.fileList['imageFile']){
              var fieldname = axithis.formItems[i].fieldname
              var fileList = axithis.formItems[i].fileList
              for(let i=0; i<axithis.data[fieldname].length; i++){
                  var filePath = axithis.data[fieldname][i]
                  var filename = filePath.split('/').reverse()
                  var f = {
                    uid: i,
                    name: filename[0],
                    status: 'done',
                    url: 'http://localhost:8081' + axithis.data[fieldname][i]
                    // url: axithis.data[fieldname][i].replace('https://bejoss.imgix.net', '/media/images')
                  }
                  fileList.push(f) 
              }
              axithis.formItems[i].fieldname = fileList
            // }
          }
        }

        if(axithis.data.service != undefined){
          if(axithis.data.service == null){
            axithis.data.service = []
          }
        }

        axithis.data.password = ''
        axithis.data.paid = (axithis.data.paid) ? 'paid' : 'unpaid'
        axithis.data.insurance = (axithis.data.insurance) ? '1' : '0'
        axithis.loading = false
      })
        .catch(function (err) {
          console.log(err)    
          axithis.loading = false
        })
    },      
    loadSelectData(key){
      const axithis = this
      const axiKey = key
      this.loading = true
      axios.get(process.env.VUE_APP_API_URL + '/'+ key +'/all',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwtoken')
          }
        })
        .then(function (response) {
            // console.log(axiKey)
            // console.log(response.data)
            axithis.selectData[axiKey] = response.data
            axithis.loading = false
        })
        .catch(function (err) {
          console.log(err)
          axithis.loading = false
        })       
    },

    // UPLOAD IMAGE
    addFiles (model) {
      document.getElementById(model).click()
    }, 
    // handleFilesUpload2(i, gi, gmi){
    //   alert(gi)
    //   alert(gmi)
    //   console.log(this.formItems[i].items[gmi])
    // },
    handleFilesUpload (model0) {
      const model = model0
      var fileList = []
      for(let i=0; i<this.formItems.length; i++){
        if(this.formItems[i].type == 'image' && this.formItems[i].model == model){
           fileList = this.formItems[i].fileList
           this.formItems[i].loading = true
        }
      }      
      var files = document.getElementById(model).files
      for(let i=0; i<files.length; i++){
          let uploadedFile = files[i]
          const fn = uploadedFile.name
          const fr = new FileReader()

          fr.readAsDataURL(uploadedFile)
          fr.addEventListener('load', () => {
              var newUid = 0
              if(fileList.length < 1){
                newUid = '1'
              }else{
                newUid = (parseInt(fileList[fileList.length-1].uid)+1).toString()
              }
          
              var f = {
                uid: newUid,
                name: fn,
                status: 'done',
                url: fr.result,
                file: files[i]
              }
              
              fileList.push(f)  
              for(let i=0; i<this.formItems.length; i++){
                if(this.formItems[i].type == 'image' && this.formItems[i].model == model){
                  this.formItems[i].fileList = fileList
                  this.formItems[i].loading = false
                }
              }              
          })   
      }
    }
    // END UPLOAD IMAGE    
  },

  mounted(){
    this.$nextTick(() => {
      if(this.$route.query.uuid){
        this.loadData()
      }
    })
    
    for(let i=0; i<this.formItems.length; i++){
      if(this.formItems[i].type == 'select' && this.formItems[i].key){
        // this.loadSelectData(this.formItems[i].key)
      }
    }
  }
};
</script>


<style>
.ant-form-item{
  margin-bottom: 40px;
}
.ant-form-item .ant-form-item{
  margin-bottom: 4px;
}
</style>
