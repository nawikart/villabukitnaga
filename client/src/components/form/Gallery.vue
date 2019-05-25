<template>
  <div>
    <Creator :postType="postType" :formItems="formItems" :apiPath="apiPath" :listPath="listPath" />
  </div>
</template>
<script>
import Creator from './_Creator.vue'
export default {
  components: {
    Creator
  },  
  data () {
    return {
        postType: 'formData',
        listPath: '/gallery?uuid=e1e2f90b-611a-11e9-82c7-88b111167862',
        formItems: [
                    {
                      type: 'input',
                      model: 'title',
                      label: 'Title',
                    },{
                      type: 'image',
                      model: 'imageFile',
                      fieldname: 'images',
                      label: 'Image',
                      fileList: [],
                      fileDeleted: [],
                      loading: false
                    }
                  ],
      
           
    };
  },
  computed: {
    apiPath: function () {
      return {
                read: process.env.VUE_APP_API_URL + '/gallery/' + this.$route.query.uuid,
                create: process.env.VUE_APP_API_URL + '/gallery/add',
                update: process.env.VUE_APP_API_URL + '/gallery/' + this.$route.query.uuid + '/edit'
              }
    }
  }
};
</script>