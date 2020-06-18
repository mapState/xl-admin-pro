<template>
  <div class="main">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="选择用户">
        <div>
          <el-button @click="dialogTableVisible=true">选择用户</el-button>
          <div class="selUserBox" v-if="showSel">
            <div>杨无敌</div>
            <div>
              <span>123456678945</span>
              <el-button type="text" style="margin-left:120px;" @click="showSel=false">删除</el-button>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="订单信息"></el-form-item>
      <el-form-item label="咨询主题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="咨询时长">
        <el-input v-model="form.name"></el-input>
        <div style="display:inline-block;">
          <el-radio v-model="form.radio" label="1">分钟</el-radio>
          <el-radio v-model="form.radio" label="2">小时</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="服务次数">
        <el-input v-model="form.name">
          <template slot="append">次</template>
        </el-input>
      </el-form-item>
      <el-form-item label="订单金额">
        <el-input v-model="form.name">
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="咨询时间">
        <el-date-picker
          v-model="form.time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>

    <!-- 选择用户 -->
    <el-dialog title="选择用户" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="id" label="头像">
          <template slot-scope="scope">
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="img"
            />
          </template>
        </el-table-column>
        <el-table-column property="id" label="昵称"></el-table-column>
        <el-table-column property="id" label="手机号码"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="diaSelUser(scope.row,1)" type="text" size="small" v-if="true">选择</el-button>
            <el-button @click="diaSelUser(scope.row,2)" type="text" size="small" v-else>取消选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="sizes, prev, pager, next"
          :total="total"
        ></el-pagination>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      gridData: [{ id: 1 }],
      showSel: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        radio: "1",
        time: ""
      },
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageNo: 1
    };
  },
  methods: {
    //选择用户
    diaSelUser(row, id) {},
    getList() {},
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.pageNo = 1;
      this.getList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNo = val;
      this.getList();
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding: 30px;
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .selUserBox {
    margin-top: 20px;
    width: 300px;
    height: 60px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .img {
    width: 60px;
    height: 60px;
  }
}
</style>