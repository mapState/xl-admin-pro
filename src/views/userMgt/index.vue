<template>
  <div class="main">
    <div class="serch">
      <el-input v-model="serchVal" placeholder="请输入手机号" class="input" clearable @clear="clearInput"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="头像" align="center">
        <template slot-scope="scope">
          <a
            href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
            target="_blank"
          >
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="avatar"
            />
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="昵称" align="center"></el-table-column>
      <el-table-column prop="id" label="注册时间" align="center"></el-table-column>
      <el-table-column prop="id" label="手机号码" align="center">144444444444</el-table-column>
      <el-table-column prop="id" label="测试记录" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,1)" type="text" size="small">1</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="课程订单" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,2)" type="text" size="small">1</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="咨询订单" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,3)" type="text" size="small">1</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="退款订单" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,4)" type="text" size="small">1</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="余额" align="center">5555</el-table-column>
      <el-table-column prop="id" label="消费金额" align="center">1111</el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,1)" type="text" size="small">禁用</el-button>
          <el-button @click="handleClick(scope.row,2)" type="text" size="small">删除</el-button>
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
    <el-dialog title="测试记录" :visible.sync="dialog1">
      <el-table :data="tableData1">
        <el-table-column property="id" label="测试时间"></el-table-column>
        <el-table-column property="id" label="测试项目"></el-table-column>
        <el-table-column property="id" label="测试成绩"></el-table-column>
        <el-table-column property="id" label="金额"></el-table-column>
        <el-table-column property="id" label="状态"></el-table-column>
        <el-table-column property="id" label="测试结果"></el-table-column>
      </el-table>
      <div class="diaPage">
        <el-pagination
        @size-change="handleSizeChange1"
        @current-change="handleCurrentChange1"
        :current-page="currentPage1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize1"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total1"
      ></el-pagination>
      </div>
    </el-dialog>
    <el-dialog title="课程订单" :visible.sync="dialog2">
      <el-table :data="tableData2">
        <el-table-column property="id" label="订单号"></el-table-column>
        <el-table-column property="id" label="服务项目"></el-table-column>
        <el-table-column property="id" label="下单时间"></el-table-column>
        <el-table-column property="id" label="金额"></el-table-column>
      </el-table>
      <div class="diaPage">
        <el-pagination
        @size-change="handleSizeChange2"
        @current-change="handleCurrentChange2"
        :current-page="currentPage2"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize2"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total2"
      ></el-pagination>
      </div>
    </el-dialog>
    <el-dialog title="咨询订单" :visible.sync="dialog3">
      <el-table :data="tableData3">
        <el-table-column property="id" label="订单号"></el-table-column>
        <el-table-column property="id" label="服务项目"></el-table-column>
        <el-table-column property="id" label="下单时间"></el-table-column>
        <el-table-column property="id" label="金额"></el-table-column>
        <el-table-column property="id" label="支付状态"></el-table-column>
      </el-table>
      <div class="diaPage">
        <el-pagination
        @size-change="handleSizeChange3"
        @current-change="handleCurrentChange3"
        :current-page="currentPage3"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize3"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total3"
      ></el-pagination>
      </div>
    </el-dialog>
     <el-dialog title="退款订单" :visible.sync="dialog4">
      <el-table :data="tableData4">
        <el-table-column property="id" label="订单号"></el-table-column>
        <el-table-column property="id" label="服务项目"></el-table-column>
        <el-table-column property="id" label="下单时间"></el-table-column>
        <el-table-column property="id" label="金额"></el-table-column>
        <el-table-column property="id" label="支付状态"></el-table-column>
        <el-table-column property="id" label="退款时间"></el-table-column>
      </el-table>
      <div class="diaPage">
        <el-pagination
        @size-change="handleSizeChange4"
        @current-change="handleCurrentChange4"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize4"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total4"
      ></el-pagination>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serchVal: "",
      tableData: [
        {
          id: "小虎"
        },
        {
          id: "小虎啊"
        }
      ],
      total: 0,
      total1: 0,
      total2: 0,
      total3: 0,
      total4: 0,
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      pageSize: 10,
      pageSize1: 10,
      pageSize2: 10,
      pageSize3: 10,
      pageSize4: 10,
      pageNo: 1,
      pageNo1: 1,
      pageNo2: 1,
      pageNo3: 1,
      pageNo4: 1,
      tableData1:[
        {
          id: "小虎"
        },
        {
          id: "小虎啊"
        }
      ],
      tableData2:[
        {
          id: "小虎"
        }
      ],
      tableData3:[
        {
          id: "小虎"
        }
      ],
      tableData4:[
        {
          id: "小虎"
        }
      ],
      dialog1:false,
      dialog2:false,
      dialog3:false,
      dialog4:false,
    };
  },
  methods: {
    getList() {},
    //清空搜索框触发
    clearInput() {},
    //操作
    handleClick(row, index) {
      if (index == 1) {
        this.$confirm("此操作将禁用该用户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "操作成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消操作"
            });
          });
      } else {
        this.$confirm("此操作将删除该用户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "操作成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消操作"
            });
          });
      }
    },
    //查看细节
    view(row, index) {
      if(index==1){
        this.dialog1=true
      }else if(index==2){
        this.dialog2=true
      }else if(index==3){
        this.dialog3=true
      }else if(index==4){
        this.dialog4=true
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
      this.getList();
    },
    handleCurrentChange1(val) {
      console.log(`当前页: ${val}`);
      this.pageNo1 = val;
      this.getList();
    },
     handleSizeChange2(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize2 = val;
      this.pageNo2 = 1;
      this.getList();
    },
    handleCurrentChange2(val) {
      console.log(`当前页: ${val}`);
      this.pageNo1 = val;
      this.getList();
    },
     handleSizeChange3(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize3 = val;
      this.pageNo3 = 1;
      this.getList();
    },
    handleCurrentChange3(val) {
      console.log(`当前页: ${val}`);
      this.pageNo3 = val;
      this.getList();
    },
     handleSizeChange4(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize4 = val;
      this.pageNo4 = 1;
      this.getList();
    },
    handleCurrentChange4(val) {
      console.log(`当前页: ${val}`);
      this.pageNo4 = val;
      this.getList();
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding: 30px;
  .serch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .input {
      width: 300px;
      margin-right: 20px;
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .avatar {
    width: 60px;
    height: 60px;
  }
  .diaPage{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>