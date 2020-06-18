<template>
  <div class="main">
    <div class="top">
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
          placeholder="请输入分类名称"
          class="input"
          clearable
          @clear="clearInput"
        ></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
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
      <el-table-column prop="id" label="咨询项目" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,1)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="课程" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,2)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="文章" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,3)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="问答" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,4)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="课程订单数" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,5)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="咨询订单数" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,6)" type="text" size="small">12</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="付费率" align="center"></el-table-column>
      <el-table-column prop="id" label="复购率" align="center"></el-table-column>
      <el-table-column prop="id" label="套餐率" align="center"></el-table-column>
      <el-table-column prop="id" label="服务评价" align="center">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,7)" type="text" size="small">4.9</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center" width="120">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick(scope.row,1)" type="text" size="small">查看</el-button> -->
          <el-button @click="handleClick(scope.row,1)" type="text" size="small">移除</el-button>
          <!-- <el-dropdown @command="handleCommand(scope.row,$event)">
            <span class="el-dropdown-link" style="color:#1890ff;">操作</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">设置热门</el-dropdown-item>
              <el-dropdown-item command="2">置顶</el-dropdown-item>
              <el-dropdown-item command="3">禁用</el-dropdown-item>
              <el-dropdown-item command="4">删除</el-dropdown-item>
              <el-dropdown-item command="5">编辑</el-dropdown-item>
              <el-dropdown-item command="6">私人订制</el-dropdown-item>
              <el-dropdown-item command="7">客服接待</el-dropdown-item>
              <el-dropdown-item command="8">调整提成</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
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
    <el-dialog title="服务项目" :visible.sync="dialog1">
      <el-table :data="tableData">
        <el-table-column property="id" label="服务项目"></el-table-column>
        <el-table-column property="id" label="金额"></el-table-column>
        <el-table-column property="id" label="销量"></el-table-column>
        <el-table-column property="id" label="好评率"></el-table-column>
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
    <el-dialog title="课程" :visible.sync="dialog2">
      <el-table :data="tableData">
        <el-table-column prop="id" label="封面" align="center">
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
        <el-table-column property="id" label="课程"></el-table-column>
        <el-table-column property="id" label="章节"></el-table-column>
        <el-table-column property="id" label="价格"></el-table-column>
        <el-table-column property="id" label="销量"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="course(scope.row,1)" type="text" size="small">查看</el-button>
            <el-button @click="course(scope.row,2)" type="text" size="small">删除</el-button>
            <el-button @click="course(scope.row,3)" type="text" size="small">下架</el-button>
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
    <el-dialog title="查看文章" :visible.sync="dialog3">
      <el-table :data="tableData">
        <el-table-column prop="id" label="封面" align="center">
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
        <el-table-column property="id" label="文章"></el-table-column>
        <el-table-column property="id" label="创建时间"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="lookArticle(scope.row)" type="text" size="small">查看</el-button>
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
    <el-dialog title="问答" :visible.sync="dialog4">
      <el-table :data="tableData">
        <el-table-column property="id" label="问题"></el-table-column>
        <el-table-column property="id" label="回答内容"></el-table-column>
        <el-table-column property="id" label="评论时间"></el-table-column>
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
    <el-dialog title="课程订单数" :visible.sync="dialog5">
      <el-table :data="tableData">
        <el-table-column property="id" label="订单号"></el-table-column>
        <el-table-column property="id" label="课程名称"></el-table-column>
        <el-table-column property="id" label="支付时间"></el-table-column>
        <el-table-column property="id" label="金额"></el-table-column>
      </el-table>
      <div class="diaPage">
        <el-pagination
          @size-change="handleSizeChange5"
          @current-change="handleCurrentChange5"
          :current-page="currentPage5"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize5"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total5"
        ></el-pagination>
      </div>
    </el-dialog>
    <el-dialog title="咨询订单" :visible.sync="dialog6">
      <el-table :data="tableData">
        <el-table-column property="id" label="订单号"></el-table-column>
        <el-table-column property="id" label="服务项目"></el-table-column>
        <el-table-column property="id" label="支付时间"></el-table-column>
        <el-table-column property="id" label="金额"></el-table-column>
      </el-table>
      <div class="diaPage">
        <el-pagination
          @size-change="handleSizeChange6"
          @current-change="handleCurrentChange6"
          :current-page="currentPage6"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize6"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total6"
        ></el-pagination>
      </div>
    </el-dialog>
    <el-dialog title="服务评价" :visible.sync="dialog7">
      <el-table :data="tableData">
        <el-table-column property="id" label="订单号"></el-table-column>
        <el-table-column property="id" label="评分"></el-table-column>
        <el-table-column property="id" label="评价内容"></el-table-column>
        <el-table-column property="id" label="评价时间"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="delAssess(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="diaPage">
        <el-pagination
          @size-change="handleSizeChange7"
          @current-change="handleCurrentChange7"
          :current-page="currentPage7"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize7"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total7"
        ></el-pagination>
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
    //删除评价
    delAssess(row){

    },
    lookArticle(row){
      this.$alert('这是一段内容啊', '文章标题', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
    },
    //课程操作
    course(row, index) {
      if(index==1){
          this.$router.push({path:'/consultant/chapter',query:{id:row.id}})
      }
    },
    //操作选项
    handleCommand(row, command) {
      switch (command) {
        case "1":
          this.setHot();
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
      this.$confirm("此操作将移除该用户, 是否继续?", "提示", {
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
      }else if (index == 5) {
        this.dialog5 = true;
      }else if (index == 6) {
        this.dialog6 = true;
      }else if (index == 7) {
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
      this.pageNo5= val;
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