<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
      <v-toolbar-title>Survey</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">          
          <div class="mt-8 text-primary text-title text-center">
            Step 1 of 3
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="text-center mt-1">How would you rate<br/>the event overall?</h2>
        </v-col>
        <v-col cols="10">
           <v-slider
            class="slider"
            v-model="form.survey1"
            :max="10"
            :min="0"
            thumb-label="always"
          ></v-slider>
          <v-btn rounded color="primary" dark class="w-100 my-btn" @click="next">Next</v-btn>
        </v-col>        
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        survey1: 5
      }
    }
  },
  methods: {
    next() {
      this.$axios.patch(`https://nuxt-tutor.firebaseio.com/survey/line:0001.json`, this.form).then((res) => {
        this.$router.push('/survey/step2')
      }).catch(e => console.log(e))   
    }
  }
}
</script>

<style lang="scss" scoped>
  .slider{
    margin-top: 90px;
    ::v-deep{
      .v-slider__thumb{
        height: 15px !important;
        width: 15px !important;
      }
      .v-slider__thumb-label{
        font-size: 20px;
        width: 45px !important;
        height: 45px !important;
      }
      .v-slider__track-background{
        background: rgba($color: #000, $alpha: 0.3) !important;
      }
      .v-slider--horizontal .v-slider__track-container{
        height: 4px;
      }
    }    
  }
  .my-btn{
    margin-top: 100px;
  }
</style>