<template>
	<div>
		<div class="_Admin">
            <h3 >Login</h3>
			<div class="_1adminOverveiw">
                <div class="space">
                     <Input type="email" ref="focusMe" v-model="data.email" placeholder="type your Email" fucas autocomplete="off" required/>
                </div>
                <div class="space">
                     <Input type="password" v-model="data.password" placeholder="********" autocomplete="off"/>
                </div>
                   <div class="foot">
                      <Button type="primary" @click="login" :disabled="isLogging" :loading="isLogging"> <Icon type="ios-log-in" /> {{ isLogging ? 'loging...' : 'Login' }}</Button>
                 </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
   data(){
       return {
           data:{
               email: '',
               password: ''
           },
           isLogging: false,
         
       }
   },
   mounted () {
    this.$refs.focusMe.focus()
  },
  methods:{
        metaInfo() {
        return {
            title: 'login',
            meta:[
                {
                name: 'desc1',
                content: 'this is about1',
                },
                {
                name: 'desc2',
                content: 'this is about2',
                },
                {
                name: 'desc3',
                content: 'this is about3',
                },
            ]
        }
    },
      async login() {
          if(this.data.email.trim() == '') return this.e('Email is required')
          if(this.data.password.trim() == '') return this.e('Password is required')
          if(this.data.password.length < 6 ) return this.e('Incorrect login details')
          this.isLogging = true
          const res = await this.api('get', 'http://127.0.0.1:8000/api-jwt/test')
          if(res.status === 200) {
              this.s(res.data.msg)
            //   console.log(res.data);
            //   window.location = '/'
            this.$router.push('/')
          }else{
              if(res.status == 401){
                //   console.log(res.data.msg);
                  this.e(res.data.msg)
              }else if(res.status == 422){
                    // console.log(res.data.errors);
                  for(let i in res.data.errors){
                      this.e(res.data.errors[i])
                  }

              }else {
                  this.swr()
              }
          }
          this.isLogging = false
      }
  },
    metaInfo() {
        return {
            title: 'login',
            meta:[
                {
                name: 'desc1',
                content: 'this is test1',
                },
                {
                name: 'desc2',
                content: 'this is test2',
                },
                {
                name: 'desc3',
                content: 'this is test3',
                },
            ]
        }
    },
}
</script>


<style>
._Admin{
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 12%;
}
._1adminOverveiw{
    background: inherit;
    box-shadow: 3px 11px 17px 19px rgb(118 158 195 / 28%);
    border-radius: 3px;
    margin-top: 20px;
    width: 32%;
    padding: 24px;
    text-align: center;
}
.space{
    margin: 10px;
}
</style>
