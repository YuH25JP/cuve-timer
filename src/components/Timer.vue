<template>
  <div id="time">
    <p class="text-green" v-if="ableToStart" >{{ time }}</p>
    <p class="text-red" v-else-if="isInspectionTime && isHoldTime" >{{ time }}</p>
    <p v-else>{{ time }}</p>
  </div>
  <div class="buttons">
    <v-icon icon="mdi-content-copy" size="x-large" @click="copyCurrentTimeToClipboard"></v-icon>
    <v-icon icon="mdi-delete" size="x-large" @click="deleteCurrentTime"></v-icon>
    <p><v-btn color="primary" class="mt-1">Copy Current 5</v-btn></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type Ref from 'vue';
import { validity, TimeResult } from '@/myTypes/timeResult';
import { useTimeHistoryStore } from '@/store/timeHistory';
import { useEventListener } from '@vueuse/core';

const time = ref('0.000');
const isValid: Ref.Ref<validity> = ref(true);
const startTime = ref();
const isStarted = ref(false);
const isInspectionTime = ref(false);
const downRightAfterStop = ref(false);
const timeoutID = ref();
// const timeList: Ref<string[]> = ref([]);
// const timeList: Ref.Ref<TimeResult[]> = ref([]);
const timeHistoryStore = useTimeHistoryStore();

const inspectionStartTime = ref();

// スタート直前のホールド時間に関連する変数
const holdBeforeStart = ref(0.5);
const holdStartTime = ref();
const ableToStart = ref(false);
const isHoldTime = ref(false);

useEventListener(document, 'keydown', onKeyDown);
useEventListener(document, 'keyup', onKeyUp);

function onKeyUp(e: KeyboardEvent) {
  console.log(`keyUp: ${e.key}`);
  if (downRightAfterStop.value) { // keydownでタイマーをストップした直後のkeyupイベントではタイマーがスタートしないようにする
    downRightAfterStop.value = false;
  } else if (e.key == ' ' && !isStarted.value && !isInspectionTime.value) {
    //TODO: inspectionをスタートする処理
    inspectionStartTime.value = Date.now();
    displayInspectionTime();
    isInspectionTime.value = true;
  } else if (e.key == ' ' && !isStarted.value) {
    if (ableToStart.value) {
      clearTimeout(timeoutID.value); // インスペクション用のタイマーをクリア
      handleClick();
      isInspectionTime.value = false;
      ableToStart.value = false;
    }
    isHoldTime.value = false;
  }
}

function onKeyDown(e: KeyboardEvent) {
  if (isStarted.value) {
    handleClick();
    // const newTimeResult = new TimeResult(time.value, undefined, isValid.value);
    const newTimeResult: TimeResult = {
      time: time.value,
      scramble: undefined,
      valid: isValid.value,
    };
    // timeList.value.push(newTimeResult);
    timeHistoryStore.hist.push(newTimeResult);
    isValid.value = true;
    downRightAfterStop.value = true;
  } else if (e.key == ' ' && !isStarted.value && isInspectionTime.value) {
    switch (isHoldTime.value) {
      case false:
        holdStartTime.value = Date.now();
        isHoldTime.value = true;
        console.log('hold started');
      default:
        ableToStart.value = judgeAbleToStart();
    }
  }
}

function judgeAbleToStart(): boolean {
  let ht = new Date(Date.now() - holdStartTime.value);
  let s = ht.getSeconds();
  let milli = ht.getMilliseconds() / 1000;
  if (s + milli >= holdBeforeStart.value) {
    return true;
  } else {
    return false;
  }
}

function handleClick() {
  if (!isStarted.value) { // start the timer
    isStarted.value = true;
    startTime.value = Date.now();
    displayTime();
  } else { // stop the timer
    isStarted.value = false;
    clearTimeout(timeoutID.value);
    // timeList.value.push(time.value);
  }
}

function displayTime() {
  if (startTime.value === null) {
    return;
  }
  const dt = new Date(Date.now() - startTime.value);
  const s = String(dt.getMinutes() * 60 + dt.getSeconds());
  const millis = String(dt.getMilliseconds()).padStart(3, '0');

  time.value = `${s}.${millis}`;
  timeoutID.value = setTimeout(displayTime, 10);
}

function displayInspectionTime() {
  if (inspectionStartTime.value === null) {
    return;
  }
  const dt = new Date(Date.now() - inspectionStartTime.value);
  const s = String(dt.getSeconds());
  const t = 15 - +s;
  if (t > 0) {
    time.value = t.toString();
  } else if (t > -1) {
    time.value = "+2";
    isValid.value = "+2";
  } else {
    time.value = "DNF";
    isValid.value = false;
  }
  timeoutID.value = setTimeout(displayInspectionTime, 1000);
}

function copyCurrentTimeToClipboard() {
  navigator.clipboard.writeText(time.value).then(() => {
    console.log('copied!');
  }).catch(e => {
    console.error(e);
  })
}

function deleteCurrentTime() {
  if (timeHistoryStore.hist.length > 0) {
    timeHistoryStore.hist.pop();
    console.log('deleted!');
    time.value = '0.000'
  } else {
    console.error('no history to delete');
  }
}
</script>

<style scoped>
#time {
  font-size: 120px;
  text-align: center;
}

.buttons {
  text-align: center;
}
</style>