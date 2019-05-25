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
        listPath: '/features',
        formItems: [
                    {
                      type: 'input',
                      model: 'title',
                      label: 'Title',
                    },{
                      type: 'textarea',
                      model: 'body',
                      label: 'Body',
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
                read: process.env.VUE_APP_API_URL + '/feature/' + this.$route.query.uuid,
                create: process.env.VUE_APP_API_URL + '/feature/add',
                update: process.env.VUE_APP_API_URL + '/feature/' + this.$route.query.uuid + '/edit'
              }
    }
  }
};
</script>