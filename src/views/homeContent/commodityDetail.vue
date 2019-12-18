<template>
  <div class="main">
    <div class="detailInfo">
      <div class="breadcrumb">
        <span class="title">当前位置: </span>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div></div>
      </div>
      <div class="commidity_introduce">
        <div class="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../../assets/commodity/1.jpg" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="introduce">
          <div class="title">易善复 多烯磷脂酰胆碱胶囊228mg*3</div>
          <div class="content">商品名称：易善复</div>
          <div class="content">通用名称：多烯磷脂酰胆碱胶囊</div>
          <div class="content">批准文号：国药准字H20059010</div>
          <div class="content">规格：228mg*36粒</div>
          <div class="content">有效期：18个月</div>
          <div class="content">生产企业：赛诺菲(北京)制药有限公司</div>
          <div class="content">剂型：胶囊剂</div>
          <div class="footer">适应症/功能主治：辅助改善中毒性肝损伤（</div>
          <div class="footer">不良反应：在大剂量服用时偶尔会出现胃肠道</div>
          <div class="footer">用法用量：除非医生处方特别指出，应按以下</div>
        </div>
      </div>
      <div class="commidity_details">
        <div>
          【药品名称】
        </div>
        <div>通用名称：多烯磷脂酰胆碱胶囊</div>
        <div>商品名称：易善复</div>
        <div>英文名称：Polyene Phosphatidylcholine Capsules;</div>
        <div>
          【成份本品】每粒胶囊含多烯磷脂酰胆碱
          （天然多烯磷脂酰胆碱，带有大量的不饱和脂肪酸基，主要为亚油酸[约占70%]、亚麻酸和油酸）228
          mg。辅料为：氢化蓖麻油、硬脂肪、乙基香兰素、4-甲氧基苯乙酮、乙醇、空心胶囊。
        </div>
        <div>
          【性状】本品为不透明硬胶囊，内容物为黄色粘稠物。
        </div>
        <div>
          【作用类别】本品为辅助用药类非处方药药品。
        </div>
        <div>
          【适应症】辅助改善中毒性肝损伤（如药物、毒物、化学物质和酒精引起的肝损伤等）以及脂肪肝和肝炎患者的食欲不振、右上腹压迫感。
        </div>
        <div>
          【规格】228毫克
        </div>
        <div>
          【用法用量】除非医生处方特别指出，应按以下剂量方案服用多烯磷脂酰胆碱胶囊。请遵照该说明书，否则不能获得多烯磷脂酰胆碱胶囊的全部疗效。
          12岁以上的儿童、青少年和成年人开始时每日3次，每粒2粒（456毫克）。每日服用量最大不能超过6粒（1368毫克）。一段时间后，剂量可减至每日3次，每次1粒（228毫克）维持剂量。
          需随餐服用，用足够量的液体整粒吞服，不能咀嚼。
          如必须长期服用多烯磷脂酰胆碱胶囊，请遵照医生的指导。
        </div>
        <div>
          【不良反应】在大剂量服用时偶尔会出现胃肠道紊乱，例如胃部不适的主诉、软便和腹泻。在极罕见的情况下，可能会出现过敏反应，如皮疹、荨麻疹、瘙痒等(发生率未知)。如果在服药过程中出现了任何本说明书中没有提到的不良反应，请咨询医师或药师。
        </div>
        <div>
          【禁忌】已知对大豆制剂、磷脂酰胆碱过敏和/或对本品中任何成分过敏的患者禁用。
        </div>
        <div>
          【注意事项】
          1.本品为辅助治疗药，第一次使用本品前应咨询医师。治疗期间应定期到医院检查。
          2.由于含有大豆油成分，本品可能会导致严重的过敏反应。
          3.使用本品时，必须同时避免有害物质（如酒精等）的摄入，以预防出现更严重的损害。
          4.对于慢性肝炎患者，使用本品治疗后如不能明显改善主观临床症状，应停药并就医。
          5.不推荐在妊娠或哺乳期间应用本品。 6.不得将本品用于12岁以下儿童。
          7.如相关症状加重或出现新症状，可能是疾病恶化的征兆，应立即就医。
          8.应严格按推荐剂量服用，不得超量，否则可能加重本品的不良反应。如服用过量或出现严重不良反应，应立即就医。
          9.对本品过敏者禁用，过敏体质者慎用。 10.本品性状发生改变时禁止使用。
          11.儿童必须在成人监护下使用。 12.请将本品放在儿童不能接触的地方。
          13.如正在使用其他药品，使用本品前请咨询医师或药师。
        </div>
        <div>
          【药物相互作用】
          1.本品与抗凝剂药物之间的相互作用尚无法排除。因此，需要对抗凝剂药物的剂量进行调整。本说明书建议患者在同时应用这两类药物时向医生进行咨询。
          2.如果正在服用其它药物，服用本药前请咨询医师或药师。
        </div>
        <div>
          【药理作用】本品是从植物中提取的。据报道。本品在乙醇、脂环醇、四氯化碳，扑热息痛和氨基牛乳糖等诱导的急性肝损伤试验模型中具有肝脏保护作用。在慢性模型（乙醇、硫代乙酰胺、有机
          溶剂中）也观察到抑制脂肪变性和纤维化作用。已有研究提示，本品可以加速膜的再生和稳定，抑制脂质过氧化，抑制胶原合成。目前尚无针对人体药效学的特殊研究。
        </div>
        <div>
          【贮藏】密闭，25℃以下干燥处保存。 【包装】铝塑包装，每盒36粒。
        </div>
        <div>
          【有效期】18个月
        </div>
        <div>
          【批准文号】国药准字H20059010
        </div>
        <div>
          【生产企业】赛诺菲（北京）制药有限公司
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .detailInfo {
    margin-top: 48px;
    width: 1092px;
    position: relative;
    .breadcrumb {
      position: absolute;
      top: -20px;
      left: 10px;
      float: left;

      .title {
        height: 14px;
        font-size: 14px;
        line-height: 1;
        float: left;
      }
      .el-breadcrumb {
        width: 500px;
      }
      .el-breadcrumb__separator {
        margin: 0px 5px;
      }
    }
    .commodityItem {
      width: auto;
    }
    //下面是布局
    .commidity_introduce {
      width: 1092px;
      height: 472px;
      background: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .carousel {
        width: 400px;
        height: 400px;
        border: 1px solid rgba(204, 204, 204, 1);
        position: relative;
        img {
          width: 307px;
          height: 307px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -153px;
          margin-left: -153px;
        }
      }
      .introduce {
        .title {
          width: auto;
          height: 30px;
          font-size: 22px;
          font-family: PingFang-SC-Heavy, PingFang-SC;
          font-weight: 800;
          color: rgba(27, 27, 27, 1);
          line-height: 30px;
          margin-bottom: 9px;
        }
        .content {
          margin-top: 15px;
          width: auto;
          height: 22px;
          font-size: 16px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(27, 27, 27, 1);
          line-height: 22px;
          margin-bottom: 12px;
        }
        .footer {
          margin-top: 11px;
          width: 460px;
          height: 20px;
          font-size: 14px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(137, 137, 137, 1);
          line-height: 20px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
    }
    .commidity_details {
      margin-top: 19px;
      background: #fff;
      padding: 26px 36px;
      width: 1020px;
      height: 1391px;
      font-size: 14px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(137, 137, 137, 1);
      line-height: 40px;
      // div {
      //   height: 20px;
      //   line-height: 20px;
      // }
    }
  }
}
</style>