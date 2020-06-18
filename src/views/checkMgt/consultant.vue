<template>
  <div class="main">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="头像" align="center">
        <template slot-scope="scope">
          <a href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg" target="_blank">
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="img"
            />
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="姓名" align="center"></el-table-column>
      <el-table-column prop="id" label="性别" align="center"></el-table-column>
      <el-table-column prop="id" label="省份" align="center"></el-table-column>
      <el-table-column prop="id" label="学历" align="center"></el-table-column>
      <el-table-column prop="id" label="擅长领域" align="center"></el-table-column>
      <el-table-column prop="id" label="认证资质" align="center"></el-table-column>
      <el-table-column prop="id" label="身份证" align="center" width="200">
        <template slot-scope="scope">
          <a href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg" target="_blank">
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="img"
            />
          </a>
           <a href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg" target="_blank">
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="img"
            />
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="学历照片" align="center">
        <template slot-scope="scope">
          <a href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg">
            <img
              src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
              alt
              class="img"
            />
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="认证资质" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,1)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="擅长领域" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,2)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="执业经历" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,3)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="培训经历" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,4)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center" width="120">
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
    <el-dialog title="认证资质" :visible.sync="dialog1">
      <el-table :data="tableData">
        <el-table-column property="id" label="培训详情"></el-table-column>
        <el-table-column property="id" label="证明材料">
          <template slot-scope="scope">
            <a href="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg" target="_blank">
              <img
                src="http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg"
                alt
                class="img"
              />
            </a>
        </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
         <template slot-scope="scope">
          <el-button @click="operating1(scope.row,1)" type="text" size="small">通过</el-button>
          <el-button @click="operating1(scope.row,2)" type="text" size="small">拒绝</el-button>
        </template>
      </el-table-column>
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
    <el-dialog title="擅长领域" :visible.sync="dialog2">
      <el-table :data="tableData">
        <el-table-column property="id" label="擅长领域"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
         <template slot-scope="scope">
          <el-button @click="operating2(scope.row,1)" type="text" size="small">通过</el-button>
          <el-button @click="operating2(scope.row,2)" type="text" size="small">拒绝</el-button>
        </template>
      </el-table-column>
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
    <el-dialog title="执业经历" :visible.sync="dialog3">
      <el-table :data="tableData">
        <el-table-column property="id" label="开始时间"></el-table-column>
        <el-table-column property="id" label="结束时间"></el-table-column>
        <el-table-column property="id" label="培训详情"></el-table-column>
        <el-table-column prop="id" label="证明材料" align="center">
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
        <el-table-column fixed="right" label="操作" align="center" width="120">
         <template slot-scope="scope">
          <el-button @click="operating3(scope.row,1)" type="text" size="small">通过</el-button>
          <el-button @click="operating3(scope.row,2)" type="text" size="small">拒绝</el-button>
        </template>
      </el-table-column>
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
    <el-dialog title="培训经历" :visible.sync="dialog4">
      <el-table :data="tableData">
        <el-table-column property="id" label="项目"></el-table-column>
        <el-table-column property="id" label="名称"></el-table-column>
        <el-table-column prop="id" label="资质证明" align="center">
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
        <el-table-column property="id" label="资质编号"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
         <template slot-scope="scope">
          <el-button @click="operating4(scope.row,1)" type="text" size="small">通过</el-button>
          <el-button @click="operating4(scope.row,2)" type="text" size="small">拒绝</el-button>
        </template>
      </el-table-column>
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
      recommendDialog: false,//推荐理由
      kefuDialog:false,
      commissionDialog:false,//提成比例
      commission:'',
      recommendText:'',
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
      },
      total1: 0,
      total2: 0,
      total3: 0,
      total4: 0,
      total5: 0,
      total6: 0,
      total7: 0,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      currentPage5: 1,
      currentPage6: 1,
      currentPage7: 1,
      pageSize1: 10,
      pageSize2: 10,
      pageSize3: 10,
      pageSize4: 10,
      pageSize5: 10,
      pageSize6: 10,
      pageSize7: 10,
      pageNo1: 1,
      pageNo2: 1,
      pageNo3: 1,
      pageNo4: 1,
      pageNo5: 1,
      pageNo6: 1,
      pageNo7: 1,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false
    };
  },
  methods: {
    //培训经历
    operating4(row,index){

    },
    //执业经历 操作
    operating3(row,index){

    },
    //擅长领域 操作
    operating2(row,index){

    },
    //认证资质操作
    operating1(row,index){

    },
    selKefu(row,index){
      if(index==1){//选择客服

      }else{//取消选择

      }
    },
    //删除评价
    delAssess(row) {},
    lookArticle(row) {
      this.$alert("这是一段内容啊", "文章标题", {
        confirmButtonText: "确定",
        callback: action => {
          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
        }
      });
    },
    goDetail(row){
      this.$router.push({path:'/consultant/info',query:{id:row.id}})
    },
    //课程操作
    course(row, index) {
      if (index == 1) {
        this.$router.push({
          path: "/consultant/chapter",
          query: { id: row.id }
        });
      }
    },
    //操作选项
    handleCommand(row, command) {
      switch (command) {
        case "1":
          this.setHot();
          break;
        case "2":
          break;
        case "6":
          this.recommendDialog = true;
          break;
        case '7':
          this.kefuDialog=true;
          break;
        case '8':
          this.commissionDialog=true
          break;
      }
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
    view(row, index) {
      if (index == 1) {
        this.dialog1 = true;
      } else if (index == 2) {
        this.dialog2 = true;
      } else if (index == 3) {
        this.dialog3 = true;
      } else if (index == 4) {
        this.dialog4 = true;
      } else if (index == 5) {
        this.dialog5 = true;
      } else if (index == 6) {
        this.dialog6 = true;
      } else if (index == 7) {
        this.dialog7 = true;
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
    },
    handleSizeChange4(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize4 = val;
      this.pageNo4 = 1;
      this.getList();
    },
    handleSizeChange5(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize5 = val;
      this.pageNo5 = 1;
      this.getList();
    },
    handleCurrentChange5(val) {
      console.log(`当前页: ${val}`);
      this.pageNo5 = val;
      this.getList();
    },
    handleSizeChange6(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize6 = val;
      this.pageNo6 = 1;
      this.getList();
    },
    handleCurrentChange6(val) {
      console.log(`当前页: ${val}`);
      this.pageNo6 = val;
      this.getList();
    },
    handleSizeChange7(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize7 = val;
      this.pageNo7 = 1;
      this.getList();
    },
    handleCurrentChange7(val) {
      console.log(`当前页: ${val}`);
      this.pageNo7 = val;
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
};
</script>
<style lang="scss" scoped>
.main {
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
  .diaPage {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
