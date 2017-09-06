<template>
  <div class="hello">
    <el-row :gutter="10" class="abc">
      <el-col :span="6" class="abc">
        <div class="leftpanel grid-content bg-purple-dark">
          <div>{{activeTodayEvent}}</div>
          <div class="eventHandleGroup">
            <template v-for="(item,index) in eventHandleList">
              <div v-if="index<2" class="eventItem">
                <div class="eventTypeNum">{{item.num}}</div>
                <div class="eventTypeName">{{item.text}}</div>
              </div>
            </template>
          </div>
          <div class="eventStatGroup">
            <template v-for="item in eventStatList">
              <div class="eventStatItem">
                <div>{{item.title}}({{item.num}})</div>
                <div>{{item.projectLable}}{{item.projectNum}}</div>
                <div>{{item.deviceLabel}}{{item.deviceNum}}</div>
                <div class="eventTypeGroup">
                  <template v-for="eventType in item.eventTypeList">
                    <div class="eventTypeItem" :style="{width:100/item.eventTypeList.length +'%'}">
                      <div class="eventTypeNum">{{eventType.eventTypeNum}}</div>
                      <div class="eventTypeName">{{eventType.eventTypeName}}</div>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>
      </el-col>
      <el-col :span="18" class="abc">
        <div class="grid-content bg-purple-dark">
          <el-tabs type="border-card">
            <el-tab-pane :label=eventHandleList[0].num+eventHandleList[0].text>
              <EventListGrid></EventListGrid>
            </el-tab-pane>
            <el-tab-pane :label=eventHandleList[1].num+eventHandleList[1].text>
              <EventListGrid></EventListGrid>
            </el-tab-pane>
            <el-tab-pane :label=eventHandleList[3].num+eventHandleList[2].text>
              <EventListGrid></EventListGrid>
            </el-tab-pane>
            <el-tab-pane :label=eventHandleList[4].num+eventHandleList[2].text>
              <EventListGrid></EventListGrid>
            </el-tab-pane>
            <el-tab-pane :label=eventHandleList[5].num+eventHandleList[2].text>
              <EventListGrid></EventListGrid>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import EventListGrid from './EventListGrid'
export default {
  name: 'event',
  data () {
    return {
      activeTodayEvent: '当前活动的报警事件',
      eventHandleList: [
        {num: 3, text: '未处理'},
        {num: 7, text: '处理中'},
        {num: 21, text: '已处理'}
      ],
      eventStatList: [
        {
          title: '今日报警事件',
          num: 21,
          projectLable: '涉及项目数：',
          projectNum: 4,
          deviceLabel: '涉及设备数：',
          deviceNum: 6,
          eventTypeList: [
            {eventTypeId: 1, eventTypeName: '事故', eventTypeNum: 2},
            {eventTypeId: 2, eventTypeName: '警报', eventTypeNum: 6},
            {eventTypeId: 3, eventTypeName: '预警', eventTypeNum: 4},
            {eventTypeId: 4, eventTypeName: '一般', eventTypeNum: 12},
            {eventTypeId: 5, eventTypeName: '其他', eventTypeNum: 5}
          ]
        },
        {
          title: '本月已发生报警事件',
          num: 305,
          projectLable: '涉及项目数：',
          projectNum: 4,
          deviceLabel: '涉及设备数：',
          deviceNum: 6,
          eventTypeList: [
            {eventTypeId: 1, eventTypeName: '事故', eventTypeNum: 2},
            {eventTypeId: 2, eventTypeName: '警报', eventTypeNum: 6},
            {eventTypeId: 3, eventTypeName: '预警', eventTypeNum: 4},
            {eventTypeId: 4, eventTypeName: '一般', eventTypeNum: 12},
            {eventTypeId: 5, eventTypeName: '其他', eventTypeNum: 5}
          ]
        }
      ]
    }
  },
  components: {EventListGrid}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .leftpanel {
    text-align: center;
  }
  eventTypeGroup {
    height: 50px;
  }
  .eventTypeItem {
    float: left;
    height: 100%;
  }
  .eventHandleGroup {
    height:50px;
  }
  .eventItem {
    float: left;
    height: 100%;
    width: 50%;
  }
  .abc,.hello,.grid-content {
    height: 100%;
  }
  .bg-purple-dark {
    background-color: WHITE;
  }
  .hello {
    background-color: #E3E3E3;
  }
</style>
