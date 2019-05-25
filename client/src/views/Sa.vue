<template>
  <a-card title="Login admin" style="max-width:300px;margin:auto;">
    <a-form :form="form" @submit="login">
        <a-form-item
        label="Email"
        >
        <a-input
            v-decorator="[
            'uname',
            {rules: [{ required: true, message: 'Please input your email' }]}
            ]"
            placeholder="Please input your email"
        />
        </a-form-item>
        <a-form-item label="Password">
            <a-input
                type="password"
                v-decorator="[
                    'password',
                    {rules: [{ required: true, message: 'Please input your password' }]}
                ]"
                placeholder="Please input your password"
            />
        </a-form-item>
        <a-form-item
        >
        <a-button
            type="primary"
            html-type="submit">
            Login
        </a-button>
        </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
                return {
                    form: this.$form.createForm(this),
                    loading: false
                }
            },
            methods: {
                login (e) {
                    e.preventDefault();
                    this.form.validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                            const axithis = this
                            this.loading = true
                            axios.post(process.env.VUE_APP_API_URL + '/admin/login',
                            {
                                "uname": values.uname,
                                "password": values.password
                            }
                            ,
                            {
                                headers: {
                                'Content-Type': 'application/json',
                                }
                            }
                            ).then(function (response) {
                                console.log(response.data)
                                if(response.data.status == 'success'){
                                    localStorage.setItem('lastLogin', (new Date().getTime()).toString())
                                    localStorage.setItem('loginName', 'Admin')
                                    localStorage.setItem('jwtoken', response.data.token)
                                    window.location.href = '/admiin/home'
                                }else{
                                    axithis.$message.error('Invalid login.');
                                }
                                axithis.loading = false
                            })
                            .catch(function (err) {
                                console.log(err)
                                axithis.$message.error('Invalid login.');
                                axithis.loading = false
                            })                      
                        }
                    });
                }, 
                reset() {
                    this.$refs.form.reset()
                }
            }
    }
</script>

<style>
.login .ant-layout-header,
.login .ant-layout-sider{
    display: none;
}
</style>
