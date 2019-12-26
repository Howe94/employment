<template>
  <div class="form-wrapper">
    <div class="iframe-wrapper" ref="wrapper">
      <iframe class="iframe" @load="iframeLoad($event)" :src="url" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import { Message, Loading } from "element-ui";
export default {
  data() {
    return {
      iframeName: "",
      url: "",
      keyVal: "",
      isReuse: false, // 是否是复用表单
      loadingInstance: null
    };
  },
  methods: {
    // iframe onload
    iframeLoad(e) {
      this.loadingInstance.close();
      if (this.url) {
        const height =
          e.target.contentWindow.document.documentElement.scrollHeight + 50;
        this.$refs.wrapper.style.height = height + "px";
      }
    },
    // 获取表单链接
    getUrl() {
      this.loadingInstance = Loading.service({
        lock: true,
        text: "Loading"
      });
      this.url = `http://192.168.0.152:7001/common/minstone/form/editForm.do?code=EMPLOY_AGREEMENT`;
    }
  },
  created() {
    this.getUrl();
  }
};
</script>

<style>
.form-wrapper {
  height: 100%;
  margin-top: 12px;
}
.iframe-wrapper {
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
}
.iframe {
  width: 100%;
  height: 100%;
}
</style>
