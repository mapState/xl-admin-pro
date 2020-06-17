<template>
  <div class="main">
    <el-row :gutter="20" class="top">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
          </div>
          <div class="list">
            <div class="item" v-for="item in 5">
              <span class="t1">62</span>
              <span class="t2">咨询师审核</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>订单数据</span>
          </div>
          <div class="list">
            <div class="item item2" v-for="item in 8">
              <span class="t1">62</span>
              <span class="t2">今日订单</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>风险预警</span>
          </div>
          <div class="yj">
            <span class="num">62</span>
            <span>预警信息（条）</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mid">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户数据</span>
          </div>
          <div class="list">
            <div class="item item2" v-for="item in 4">
              <span class="t1">62</span>
              <span class="t2">咨询师审核</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户数据</span>
          </div>
          <div class="list2">
            <div class="item2" v-for="item in 8">
              <span class="t1">62</span>
              <span class="t2">咨询师审核</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bottom">
      <el-col :span="12">
        <el-card class="card">
          <div slot="header" class="clearfix">
            <span>用户增长折线图</span>
          </div>
          <div class="echarts" ref="echarts1"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="card">
          <div slot="header" class="clearfix">
            <span>财务增长折线图</span>
          </div>
          <div class="echarts" ref="echarts2"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart1: null,
      chart2: null
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.chart1 = echarts.init(this.$refs.echarts1);
      this.setOptions();
      this.chart2 = echarts.init(this.$refs.echarts2);
      this.setOptions2();
    },
    setOptions() {
      this.chart1.setOption({
        title: {
          text: "ECharts1"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    setOptions2() {
      this.chart2.setOption({
        title: {
          text: "ECharts2"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding: 20px 0;
  .top {
    margin-bottom: 20px;
    .box-card {
      width: 100%;
      .yj {
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .num {
          color: red;
          margin-bottom: 20px;
        }
      }
      .list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .item {
          width: 33.33%;
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 20px;
          .t1 {
            font-weight: bold;
          }
        }
        .item2 {
          width: 25%;
        }
      }
    }
  }
  .mid {
    margin-bottom: 20px;
    .box-card {
      width: 100%;
      .list {
        width: 100%;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .item {
          width: 25%;
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 20px;
          .t1 {
            font-weight: bold;
          }
        }
      }
      .list2 {
        width: 100%;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .item2 {
          width: 25%;
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 20px;
          .t1 {
            font-weight: bold;
          }
        }
      }
    }
  }
  .bottom {
    .echarts {
      width: 100%;
      height: 200px;
    }
  }
}
</style>