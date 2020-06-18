<template>
  <div class="main">
    <div class="header">
      <div class="item">
        <span>类型</span>
        <el-select v-model="value1" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <span>支付状态</span>
        <el-select v-model="value2" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <span>选择时间</span>
        <el-date-picker
          v-model="time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
        ></el-date-picker>
      </div>
      <div class="search">
        <el-input
          placeholder="请输入订单编号"
          v-model="searchVal"
          clearable
          class="input"
          @clear="clearInput"
        ></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="订单号" align="center"></el-table-column>
      <el-table-column prop="id" label="服务项目" align="center"></el-table-column>
      <el-table-column prop="id" label="订单类型" align="center"></el-table-column>
      <el-table-column prop="id" label="订单状态" align="center"></el-table-column>
      <el-table-column prop="id" label="下单用户" align="center"></el-table-column>
      <el-table-column prop="id" label="金额" align="center"></el-table-column>
      <el-table-column prop="id" label="支付时间" align="center"></el-table-column>
      <el-table-column prop="id" label="咨询师" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
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
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [{ id: 1 }],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageNo: 1,
      value1: "",
      value2: "",
      time: "",
      searchVal: ""
    };
  },
  methods: {
    getList() {},
    //清空搜索框触发
    clearInput() {},
    handleClick(row, index) {
      if (index == 1) {
        //退款
        this.$alert("确定退款吗", "退款", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "success",
              message: `ok`
            });
          }
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
  font-size: 14px;
  padding: 30px;
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
}
</style>