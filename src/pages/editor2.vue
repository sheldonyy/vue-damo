<template>
  <div style="width: 70%; margin-left: 30px; margin-top: 30px">
    <el-button type="primary" @click="dialogVisible = true">打开弹窗</el-button>
    <!-- 弹窗 -->
    <el-dialog
      title="修改ext_json"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <b-code-editor
        v-model="jsonStr"
        :auto-format="true"
        :smart-indent="true"
        theme="dracula"
        :indent-unit="4"
        :line-wrap="false"
        ref="editor"
      ></b-code-editor>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubumit">确 定</el-button>
      </span>
    </el-dialog>
    <br />
  </div>
</template>

<script>
const jsonData = `{
    "employees": [{
      "firstName": "Bill",
      "lastName": "Gates"
    }, {
      "firstName": "George",
      "lastName": "Bush"
    }, {
      "firstName": "Thomas",
      "lastName": "Carter"
    }]
  }`;
export default {
  name: "index",
  data() {
    return {
      dialogVisible: false,
      jsonStr: jsonData,
    };
  },
  methods: {
    // 检测json格式
    isJSON(str) {
      if (typeof str == "string") {
        try {
          var obj = JSON.parse(str);
          if (typeof obj == "object" && obj) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      } else if (typeof str == "object" && str) {
        return true;
      }
    },
    onSubumit() {
      if (!this.isJSON(this.jsonStr)) {
        this.$message.error("ext_json格式错误");
        return false;
      }
      this.dialogVisible = false;
    },
    // 弹窗
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style></style>
