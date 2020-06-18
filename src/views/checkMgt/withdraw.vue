<template>
  <div class="main">
    <div class="top">
      <div class="class">
        <span style="padding-right:20px;">类别</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="serch">
        <el-input
          v-model="serchVal"
          placeholder="请输入名称"
          class="input"
          clearable
          @clear="clearInput"
        ></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="提现编码" align="center"></el-table-column>
      <el-table-column prop="id" label="提现人" align="center"></el-table-column>
      <el-table-column prop="id" label="提现金额" align="center"></el-table-column>
      <el-table-column prop="id" label="提现时间" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,1)" type="text" size="small">通过</el-button>
          <el-button @click="handleClick(scope.row,2)" type="text" size="small">拒绝</el-button>
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
    <el-dialog title="标题标题" :visible.sync="dialogFormVisible">
      <div v-html="111"></div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      serchVal: "",
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageNo: 1,
      tableData: [
        {
          id: "小虎"
        },
        {
          id: "小虎啊"
        }
      ],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        name: "",
        icon: "",
        sort: ""
      }
    };
  },
  methods: {
      //查看内容
      view(){
          this.dialogFormVisible=true
      },
    openForm() {
      this.dialogFormVisible = true;
      this.form = {
        name: "",
        icon: "",
        sort: ""
      };
    },
    getList() {},
    //清空搜索框触发
    clearInput() {},
    handleClick(row, index) {
      if (index == 1) {
       this.$confirm("确定审核通过?", "提示", {
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
        this.$prompt('拒绝理由', '确认拒绝', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
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
    },
    handleAvatarSuccess(res, file) {
      this.form.icon = URL.createObjectURL(file.raw);
      console.log(file.raw);
    },
    beforeAvatarUpload(file) {
      //   const isJPG = file.type === "image/jpeg";
      //   const isLt2M = file.size / 1024 / 1024 < 2;
      //   if (!isJPG) {
      //     this.$message.error("上传头像图片只能是 JPG 格式!");
      //   }
      //   if (!isLt2M) {
      //     this.$message.error("上传头像图片大小不能超过 2MB!");
      //   }
      //   return isJPG && isLt2M;
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding: 30px;
  .top {
    .class {
      display: flex;
      align-items: center;
    }
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
  .img {
    width: 60px;
    height: 60px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
