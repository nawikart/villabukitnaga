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
        listPath: '/about-bali?uuid=2226c7b7-610a-11e9-82c7-88b111167862',
        formItems: [
                    {
                        type: 'textarea',
                        model: 'body1',
                        label: 'Body 1'
                    },{
                        type: 'textarea',
                        model: 'body2',
                        label: 'Body 2'
                    }
                  ],
      
           
    };
  },
  computed: {
    apiPath: function () {
      return {
                read: process.env.VUE_APP_API_URL + '/about_bali/' + this.$route.query.uuid,
                create: process.env.VUE_APP_API_URL + '/about_bali/add',
                update: process.env.VUE_APP_API_URL + '/about_bali/' + this.$route.query.uuid + '/edit'
              }
    }
  }
};
</script>