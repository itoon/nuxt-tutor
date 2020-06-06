<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
      <v-toolbar-title>Reward Card</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col>
          <v-card class="mt-8">
            <v-card-text>
              <div class="d-flex">
                <div>
                  <img :src="getLine.pictureUrl" alt="" width="40" style="border-radius: 50%;">
                </div>
                <div class="align-self-center">
                  <h2 class="name text-primary m-0">{{ getLine.displayName }}</h2>
                </div>
              </div>
            </v-card-text>
            <div class="stamp-zone">
              <div class="stamp">
                <div class="circle active">
                  <span>1</span>
                  <v-icon>check</v-icon>
                </div>
              </div>
              <div class="stamp">
                <div class="circle">
                  <span>2</span>
                  <v-icon>check</v-icon>
                </div>
              </div>
              <div class="stamp">
                <div class="circle">
                  <span>2</span>
                  <v-icon>check</v-icon>
                </div>
              </div>
              <div class="stamp">
                <div class="circle">
                  <span>2</span>
                  <v-icon>check</v-icon>
                </div>
              </div>
              <div class="stamp">
                <div class="circle">
                  <span>2</span>
                  <v-icon>check</v-icon>
                </div>
              </div>
              <div class="stamp">
                <div class="circle">
                  <span>2</span>
                  <v-icon>check</v-icon>
                </div>
              </div>
              <div class="stamp">
                <div class="circle">
                  <span>2</span>
                  <v-icon>check</v-icon>
                </div>
              </div>              
              <div class="stamp">
                <div class="circle end">
                  <span>GOAL</span>
                  <v-icon>check</v-icon>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn rounded color="primary" dark class="w-100 mt-10 my-btn scan" @click="scan">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M1.641,1.641H6.563V0H0V6.563H1.641Zm0,0"/><path class="a" d="M392,0V1.641h4.922V6.563h1.641V0Zm0,0" transform="translate(-370.563)"/><path class="a" d="M396.922,396.922H392v1.641h6.563V392h-1.641Zm0,0" transform="translate(-370.563 -370.563)"/><path class="a" d="M1.641,392H0v6.563H6.563v-1.641H1.641Zm0,0" transform="translate(0 -370.563)"/><path class="a" d="M61,60v8.2h8.2V63.281h1.641V61.641H69.2V60Zm6.563,6.563H62.641V61.641h4.922Zm0,0" transform="translate(-57.664 -56.719)"/><path class="a" d="M280.844,279.844v-8.2h-3.281V270h-1.641v1.641H271v1.641h1.641v1.641H271v1.641h1.641v3.281Zm-6.563-6.563H279.2V278.2h-4.922Zm0,0" transform="translate(-256.18 -255.234)"/><path class="a" d="M65.922,241.641H69.2V240H61v1.641h3.281v1.641H62.641v1.641h1.641V248.2H62.641v1.641h1.641v1.641h8.2v-1.641H70.844V248.2H69.2v1.641H65.922V248.2h1.641v-1.641H65.922Zm0,0" transform="translate(-57.664 -226.875)"/><path class="a" d="M121,120h1.641v1.641H121Zm0,0" transform="translate(-114.383 -113.438)"/><path class="a" d="M361,120h1.641v1.641H361Zm0,0" transform="translate(-341.258 -113.438)"/><path class="a" d="M305.922,68.2H309.2V60H301v8.2h3.281v1.641h1.641Zm-3.281-1.641V61.641h4.922v4.922Zm0,0" transform="translate(-284.539 -56.719)"/><path class="a" d="M394.281,241.641V240H391v1.641Zm0,0" transform="translate(-369.617 -226.875)"/><path class="a" d="M361,360h1.641v1.641H361Zm0,0" transform="translate(-341.258 -340.313)"/><path class="a" d="M241,330h1.641v1.641H241Zm0,0" transform="translate(-227.82 -311.953)"/><path class="a" d="M181,303.281h1.641V300H181Zm0,0" transform="translate(-171.102 -283.594)"/><path class="a" d="M211,270h1.641v1.641H211Zm0,0" transform="translate(-199.461 -255.234)"/><path class="a" d="M62.641,330H61v3.281h1.641Zm0,0" transform="translate(-57.664 -311.953)"/><path class="a" d="M61,420h1.641v1.641H61Zm0,0" transform="translate(-57.664 -397.031)"/><path class="a" d="M241,60h1.641v1.641H241Zm0,0" transform="translate(-227.82 -56.719)"/><path class="a" d="M241,123.281h1.641V120H241Zm0,0" transform="translate(-227.82 -113.438)"/><path class="a" d="M242.641,211.641V210H241v3.281h6.563v-1.641Zm0,0" transform="translate(-227.82 -198.516)"/></svg>
            Scan to collect
          </v-btn>
          <v-btn rounded color="primary" dark class="w-100 mt-10 my-btn" @click="next">Redeem Reward</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted(){
    liff.init({
      liffId: '1654259572-eY7zEd2M'
    }).then(() => {
      if(liff.isLoggedIn()){
        liff.getProfile().then(profile => {
          this.$store.dispatch('setLine', profile);
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
  methods: {
    scan(){

    },
    next(){

    }
  }
}
</script>

<style lang="scss" scoped>
  .name{
    margin-left: 20px;
    font-size: 20px;
  }
  .v-card__text{
    padding: 10px 15px;
  }
  .stamp-zone{
    background: #BDBDBD;
    padding: 25px 25px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .stamp{
    flex-basis: 25%;
  }
  .circle{
    background: #FFF;
    border-radius: 50%;
    border: 2px #1A56BE solid;
    height: 55px;
    width: 55px;    
    justify-content: center;
    display: inline-flex;
    margin-bottom: 25px;    
    .v-icon{
      display: none;
    }
    &.active{
      background: #1A56BE;
      span{
        display: none;
      }
      .v-icon{
        display: flex;
        color: #FFF;
      }
    }
    &.end{
      background: #1A56BE;
      span{
        font-size: 16px;        
        color: #FFF;
      }
    }
    span{
      align-self: center;
      font-size: 20px;
      color: #1A56BE;
      font-weight: bold;
    }
  }
  .scan{
    svg{
      margin-right: 5px;
    }
  }
</style>