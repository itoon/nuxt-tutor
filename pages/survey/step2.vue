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
            Step 2 of 3
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="text-center mt-1 question">Which parts of the event did you enjoy?</h2>
        </v-col>
        <v-col cols="10">  
          <v-textarea
            clearable
            clear-icon="cancel"
            label="Comments"
            v-model="form.survey2"
            :value="form.survey2"
          ></v-textarea>         
          <v-btn rounded color="primary" dark class="w-100 my-btn mt-100" @click="next">Next</v-btn>
          <div class="w-100 text-center my-btn text-primary" @click="back">Back</div>
        </v-col>        
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
        survey2: this.$store.getters.getSurvey.survey2
      }
    }    
  },
  methods: {
    next(){
      this.$store.dispatch("setSurvey", this.form)
      this.$axios.patch(`https://nuxt-tutor.firebaseio.com/survey/line:0001.json`, this.form).then((res) => {
        this.$router.push('/survey/step3')
      }).catch(e => console.log(e))
    },
    back(){
      this.$router.push('/survey')
    }
  }
}
</script>

<style lang="scss" scoped>
  .question{
    font-size: 20px;
  }
</style>