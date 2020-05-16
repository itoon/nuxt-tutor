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
            Step 3 of 3
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="text-center mt-1 question">
            Finally, would you recommend our event to a friend?
          </h2>
        </v-col>        
        <v-col cols="11">
          <div class="select" :class="form.survey3 == 1 ? 'active' : ''" @click="form.survey3 = 1">
            <h1>Of course!</h1>
            <p>Definitely i’ll join next event.</p>
            <v-icon>check</v-icon>
          </div>
          <div class="select" :class="form.survey3 == 2 ? 'active' : ''"  @click="form.survey3 = 2">
            <h1>Not sure</h1>
            <p>Let me think again next time.</p>
            <v-icon>check</v-icon>
          </div>
          <div class="select" :class="form.survey3 == 3 ? 'active' : ''"  @click="form.survey3 = 3">
            <h1>No, thanks</h1>
            <p>It’s not my type.</p>
            <v-icon>check</v-icon>
          </div>
        </v-col>
        <v-col cols="10">                            
          <v-btn rounded color="primary" dark class="w-100 my-btn mt-50" @click="submit">Submit</v-btn>
          <div class="w-100 text-center my-btn text-primary" @click="back">Back</div>
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
        survey3: 1
      }
    }
  },
  methods: {
    submit(){
      this.$store.dispatch("setSurvey", this.form)
      this.$axios.patch(`https://nuxt-tutor.firebaseio.com/survey/line:0001.json`, this.form).then((res) => {
        this.$router.push('/survey/done')
      }).catch(e => console.log(e))
    },
    back(){
      this.$router.push('/survey/step2')
    }
  }
}
</script>

<style lang="scss" scoped>
  .question{
    font-size: 20px;
  }
  .select{
    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 25px;
    color: #707070;
    position: relative;
    &.select{
      margin-top: 25px;
    }
    &.active{
      color: #1A56BE;
      .v-icon{
        color: #1A56BE;
        display: block;
      }
    }
    h1{
      font-size: 20px;
    }
    p{
      font-size: 18px;
      margin-bottom: 0;
    }
    .v-icon{
      position: absolute;
      right: 0;
      bottom: 25px;
      display: none;
    }
  }
  .mt-50{
    margin-top: 50px;
  }
</style>