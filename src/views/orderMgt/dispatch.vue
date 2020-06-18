<template>
  <div class="main">
    <div class="header">
      <el-button type="primary" @click="create">创建订单</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="订单号" align="center"></el-table-column>
      <el-table-column prop="id" label="服务项目" align="center"></el-table-column>
      <el-table-column prop="id" label="下单用户" align="center"></el-table-column>
      <el-table-column prop="id" label="服务次数" align="center"></el-table-column>
      <el-table-column prop="id" label="时长" align="center"></el-table-column>
      <el-table-column prop="id" label="金额" align="center"></el-table-column>
      <el-table-column prop="id" label="咨询时间" align="center"></el-table-column>
      <el-table-column prop="id" label="备注" align="center"></el-table-column>
      <el-table-column prop="id" label="报名" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,1)" type="text" size="small">派单</el-button>
          <el-button @click="handleClick(scope.row,2)" type="text" size="small">报名链接</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 选择咨询师 -->
    <el-dialog title="选择咨询师" :visible.sync="dialogTableVisible">
      <div class="top">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="serch">
          <el-input
            v-model="serchVal"
            placeholder="请输入手机号"
            class="input"
            clearable
            @clear="clearInput"
          ></el-input>
        </div>
      </div>
      <el-table :data="tableData">
        <el-table-column property="id" label="头像">
          <template slot-scope="scope">
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="img"
            />
          </template>
        </el-table-column>
        <el-table-column property="id" label="姓名"></el-table-column>
        <el-table-column property="id" label="性别"></el-table-column>
        <el-table-column property="id" label="省份"></el-table-column>
        <el-table-column property="id" label="学历"></el-table-column>
        <el-table-column property="id" label="擅长领域"></el-table-column>
        <el-table-column property="id" label="认证资质"></el-table-column>
        <el-table-column prop="id" label="付费率" align="center"></el-table-column>
        <el-table-column prop="id" label="复购率" align="center"></el-table-column>
        <el-table-column prop="id" label="套餐率" align="center"></el-table-column>
        <el-table-column prop="id" label="服务评价" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="diaSelUser(scope.row,1)" type="text" size="small" v-if="true">选择</el-button>
            <el-button @click="diaSelUser(scope.row,2)" type="text" size="small" v-else>取消选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange1"
          @current-change="handleCurrentChange1"
          :current-page.sync="currentPage1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize1"
          layout="sizes, prev, pager, next"
          :total="total1"
        ></el-pagination>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible1 = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 选择咨询师 -->
     <!-- 选择咨询师 -->
    <el-dialog title="选择咨询师" :visible.sync="dialogTableVisible1">
      <div class="top">
        <div class="serch">
          <el-input
            v-model="serchVal"
            placeholder="请输入手机号"
            class="input"
            clearable
            @clear="clearInput"
          ></el-input>
        </div>
      </div>
      <el-table :data="tableData">
        <el-table-column property="id" label="头像">
          <template slot-scope="scope">
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="img"
            />
          </template>
        </el-table-column>
        <el-table-column property="id" label="姓名"></el-table-column>
        <el-table-column property="id" label="性别"></el-table-column>
        <el-table-column property="id" label="省份"></el-table-column>
        <el-table-column property="id" label="学历"></el-table-column>
        <el-table-column property="id" label="擅长领域"></el-table-column>
        <el-table-column property="id" label="认证资质"></el-table-column>
        <el-table-column prop="id" label="付费率" align="center"></el-table-column>
        <el-table-column prop="id" label="复购率" align="center"></el-table-column>
        <el-table-column prop="id" label="套餐率" align="center"></el-table-column>
        <el-table-column prop="id" label="服务评价" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="diaSelUser(scope.row,1)" type="text" size="small" v-if="true">选择</el-button>
            <el-button @click="diaSelUser(scope.row,2)" type="text" size="small" v-else>取消选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible1 = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      tableData: [{ id: 1 }],
      dialogTableVisible: false,
      dialogTableVisible1: false,
      total: 0,
      currentPage: 1,
      currentPage1: 1,
      pageSize: 10,
      pageSize1: 10,
      pageNo: 1,
      pageNo1: 1,
      value1: "",
      value2: "",
      time: "",
      searchVal: "",
      serchVal:''
    };
  },
  methods: {
    //去创建订单
    create() {
      this.$router.push({ path: "/orderMgt/create" });
    },
    view() {
      this.dialogTableVisible = true;
    },
    getList() {},
    //清空搜索框触发
    clearInput() {},
    handleClick(row, index) {
      if (index == 1) {
        this.dialogTableVisible1=true
      }
        
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
    },
    handleSizeChange1(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize1 = val;
      this.pageNo1 = 1;
      this.getList()
    },
    handleCurrentChange1(val) {
      console.log(`当前页: ${val}`);
      this.pageNo1 = val;
      this.getList()
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  font-size: 14px;
  padding: 30px;
  .top {
    padding: 0 30px;
    margin-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .serch {
      display: flex;
      align-items: center;
      .input {
        margin-right: 20px;
      }
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .search {
      margin-left: 20px;
      display: flex;
      align-items: center;
      .input {
        margin-right: 20px;
      }
    }
    .item {
      margin-right: 20px;
      span {
        font-weight: bold;
      }
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .img {
    width: 60px;
    height: 60px;
  }
}
</style>