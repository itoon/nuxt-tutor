<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">          
          <div class="mt-8 text-primary text-title text-center">
            Step 1 of 2
          </div>
        </v-col>
        <v-col cols="12" class="text-center pb-0 profile-img">
          <img v-if="getLine.pictureUrl == ''" src="~/assets/profile.png" alt="" width="155">
          <img v-else :src="getLine.pictureUrl" alt="" width="155">
        </v-col>
        <v-col cols="12" class="text-center pt-2 pb-0">
          {{ getLine.displayName }}
        </v-col>
        <v-col cols="12">
          <v-form>
            <v-text-field
              v-model="form.firstname"
              dense          
              label="Firstname"
            ></v-text-field>
            <v-text-field
              v-model="form.lastname"
              dense         
              label="Lastname"
            ></v-text-field>
            <div class="gender-group d-flex mt-3">
              <p>Gender</p>
              <div class="circle" :class="form.gender == 1 ? 'active' : ''" @click="chooseGender(1)">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.172" height="31.883" viewBox="0 0 21.172 31.883"><defs><style>.a{fill:#fff;}</style></defs><g transform="translate(-799 -426.117)"><g transform="translate(799 426.117)"><path class="a" d="M104.075,18.069a10.6,10.6,0,1,0-8.735,3.023v3.545H92.848a1.246,1.246,0,1,0,0,2.491H95.34v3.509a1.246,1.246,0,0,0,2.492,0V27.128h2.492a1.246,1.246,0,1,0,0-2.491H97.832V21.092A10.541,10.541,0,0,0,104.075,18.069ZM90.859,16.307a8.1,8.1,0,1,1,11.454,0A8.1,8.1,0,0,1,90.859,16.307Z" transform="translate(-85.999 0)"/></g></g></svg>
              </div>
              <p>Female</p>
              <div class="circle" :class="form.gender == 2 ? 'active' : ''" @click="chooseGender(2)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.313" height="24.313" viewBox="0 0 24.313 24.313"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M24.3.882a1,1,0,0,0-.062-.25.03.03,0,0,1,0-.007h0A1.031,1.031,0,0,0,24.1.395c-.013-.017-.026-.033-.041-.048a1.034,1.034,0,0,0-.194-.175l-.006,0a1,1,0,0,0-.23-.109L23.567.04A1.01,1.01,0,0,0,23.3,0H16.209a1.013,1.013,0,0,0,0,2.026h4.645L14.808,8.073A9.123,9.123,0,1,0,16.24,9.506l6.047-6.047V8.1a1.013,1.013,0,1,0,2.026,0V1.013c0-.021,0-.042-.006-.062S24.3.905,24.3.882ZM9.118,22.287A7.1,7.1,0,1,1,16.209,15.2,7.1,7.1,0,0,1,9.118,22.287Zm0,0"/></svg>
              </div>              
              <p>Male</p>
            </div>
            <v-btn rounded color="primary" dark class="w-100 mt-10 my-btn" @click="next">Next</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>        
  </div>
</template>
<script>
export default { 
  mounted(){
    liff.init({
      liffId: '1654259572-2LkW0XJR'
    }).then(() => {
      if(liff.isLoggedIn()){
        liff.getProfile().then(profile => {                    
          this.$store.dispatch('setLine', profile);
          this.isDone();
        })
      }else{
        liff.login();
      }
    })
  },  
  computed: {
    getLine(){
      return this.$store.getters.getLine;      
    }
  },
  data(){    
    return {      
      form: {
        firstname: this.$store.getters.getRegister.firstname,
        lastname: this.$store.getters.getRegister.lastname,
        gender: this.$store.getters.getRegister.gender       
      },      
    }
  },  
  methods: {    
    isDone(){
      this.$axios.get(`https://nuxt-tutor.firebaseio.com/members/${this.$store.getters.getLine.userId}/profile.json`).then((res) => {
        if(res.data != null){
          this.$router.push('register/done');
        }
      });
    },
    chooseGender(gender){
      this.form.gender = gender
    },
    validate(){
      let validated = true
      const errors = []
      const validatorField = [
        'firstname',
        'lastname'
      ]
      validatorField.forEach((field) => {
        if(this.form[field] == ''){
          validated = false
          errors.push(`${field} can not be null`)
        }
      })
      if(!validated){
        this.$store.dispatch('setDialog', {
          isShow: true,
          title: 'Form is error',
          message: errors.map((error) => error+'<br/>').join('')
        })        
      }
      return validated
    },
    next(){      
      if(this.validate()){
        this.$store.dispatch('setRegister', this.form)
        this.$router.push('/register/step2')
      }      
    }
  }
}
</script>
<style lang="scss" scoped>
  .v-form{
    padding: 0 10px;
  }
  .profile-img{
    img{
      border-radius: 50%;
    }
  }
  .gender-group{
    p{
      margin-bottom: 0;
      align-self: center;
      margin-right: 20px;
    }
    .circle{
      width: 45px;
      height: 45px;      
      color: #FFF;
      border-radius: 50%;
      position: relative;
      background: rgba($color: #000000, $alpha: 0.3);
      margin-right: 7px;
      &.active{
        background: #1A56BE;
      }
      svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>