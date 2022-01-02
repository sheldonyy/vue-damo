<template>
  <div style="width: 70%;margin-left: 30px;margin-top: 30px;">
    <vue-json-editor
      v-model="resultInfo"
      :showBtns="false"
      :mode="'code'"
     
      @json-change="onJsonChange"
      @json-save="onJsonSave"
      @has-error="onError"
    />
    <br>
    <button type="primary" @click="checkJson">确定</button>
  </div>
</template>

<script>
  // 导入模块
  import vueJsonEditor from 'vue-json-editor'
  export default {
    name: 'two',  
    // 注册组件
    components: { vueJsonEditor },
    data() {
      return {
        hasJsonFlag:true,  // json是否验证通过
        // json数据
        resultInfo: {
          'employees': [
            {
            'firstName': 'Bill',
            'lastName': 'Gates'
            },
            {
              'firstName': 'George',
              'lastName': 'Bush'
            },
            {
              'firstName': 'Thomas',
              'lastName': 'Carter'
            }
          ]
        }
      }
    },
    mounted: function() {
    },
    methods: {
      onJsonChange (value) {
        // 实时保存
        this.onJsonSave(value)
      },
      onJsonSave (value) {
        this.resultInfo = value
        this.hasJsonFlag = true
      },
      onError(value) {
        console.log("json错误了value:", value);
        this.hasJsonFlag = false
      },
      // 检查json
      checkJson(){
        if (this.hasJsonFlag == false){
          alert("json验证失败")
          return false
        } else {
          alert("json验证成功")
          return true
        }
      },
    }
  }
</script>

<style>
</style>