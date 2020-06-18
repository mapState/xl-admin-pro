<template>
  <div class="main">
    <el-tabs type="border-card" @tab-click="changeTabs" v-model="activeName">
      <el-tab-pane label="基本资料" name="1">
        <div class="box1">
          <div class="header">
            <img src="http://img.zcool.cn/community/0169b8588d7abba8012060c8a3e14a.jpg@2o.jpg" alt />
            <span>娃哈哈</span>
            <span>男</span>
          </div>
          <div class="row">
            <div>
              <span class="t1">地区：</span> xxxxx
            </div>
            <div>
              <span class="t1">学历：</span> xxxxx
            </div>
            <div>
              <span class="t1">注册时间：</span> xxxxx
            </div>
          </div>
          <div class="row">
            <div>
              <span class="t1">手机号码：</span> xxxxx
            </div>
            <div>
              <span class="t1">擅长领域：</span> xxxxx
            </div>
            <div>
              <span class="t1">个人标签：</span> xxxxx
            </div>
          </div>
          <div class="row">
            <div>
              <span class="t1">证书级别：</span> xxxxx
            </div>
            <div>
              <span class="t1">认证资质：</span> xxxxx
            </div>
            <div>
              <span class="t1">持证年限：</span> xxxxx
            </div>
          </div>
          <div class="row">
            <div>
              <span class="t1">微信号：</span> xxxxx
            </div>
          </div>
          <div class="row">
            <div>
              <span class="t1">面询地址：</span> xxxxx
            </div>
          </div>
          <div class="row">
            <div>
              <span class="t1">咨询师寄语：</span> xxxxx
            </div>
          </div>
          <div class="row">
            <span class="t1">学历证书</span>
            <img src="http://img.zcool.cn/community/0169b8588d7abba8012060c8a3e14a.jpg@2o.jpg" alt />
          </div>
          <div class="row">
            <span class="t1">身份证</span>
            <img src="http://img.zcool.cn/community/0169b8588d7abba8012060c8a3e14a.jpg@2o.jpg" alt />
            <img src="http://img.zcool.cn/community/0169b8588d7abba8012060c8a3e14a.jpg@2o.jpg" alt />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="资质信息" name="2">
        <div class="box2">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="项目" width="180"></el-table-column>
            <el-table-column prop="id" label="名称" width="180"></el-table-column>
            <el-table-column prop="id" label="资质证明">
              <template slot-scope="scope">
                <a
                  href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
                  target="_blank"
                >
                  <img
                    src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
                    alt
                    class="img"
                  />
                </a>
              </template>
            </el-table-column>
            <el-table-column prop="id" label="资质编号"></el-table-column>
            <el-table-column prop="id" label="状态"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="受训经历" name="3">
          <div class="box2">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="开始时间" width="180"></el-table-column>
            <el-table-column prop="id" label="结束时间" width="180"></el-table-column>
            <el-table-column prop="id" label="培训详情"></el-table-column>
            <el-table-column prop="id" label="证明材料">
              <template slot-scope="scope">
                <a
                  href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
                  target="_blank"
                >
                  <img
                    src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
                    alt
                    class="img"
                  />
                </a>
              </template>
            </el-table-column>
            <el-table-column prop="id" label="状态"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      tableData: [{ id: 1 }]
    };
  },
  methods: {
    changeTabs(tab, event) {
      //console.log(tab);
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  font-size: 14px;
  .box1 {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    .header {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 50%;
      }
      span {
        font-weight: bold;
        margin-right: 20px;
      }
    }
    .row {
      width: 100%;
      padding-left: 80px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      div {
        margin-right: 40px;
        color: #666;
      }
      .t1 {
        display: inline-block;
        width: 80px;
        font-weight: bold;
        color: #000;
      }
      img {
        width: 80px;
        height: 40px;
        margin-right: 20px;
      }
    }
  }
  .box2 {
    width:100%;
    padding:40px;
    box-sizing: border-box;
    img {
      width: 60px;
      height: 60px;
    }
    min-height: 500px;
  }
}
</style>