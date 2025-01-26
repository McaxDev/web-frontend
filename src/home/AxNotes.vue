<template>
  <div class="message-container">
    <transition name="fade" mode="out-in">
      <div :key="currentIndex" class="message-box">
        <div class="message-quote">“</div>
        <div class="message-content">
          <div class="message-user">{{ notes[currentIndex].username }}</div>
          <div class="message-text">{{ notes[currentIndex].message }}</div>
        </div>
        <div class="message-quote">”</div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    // 留言数据
    notes: {
      type: Array,
      required: true
    },
    // 留言切换的时间间隔，单位毫秒
    interval: {
      type: Number,
      default: 3000
    }
  },
  setup(props) {
    const currentIndex = ref(0);
    let intervalId = null;

    const nextMessage = () => {
      currentIndex.value = (currentIndex.value + 1) % props.notes.length;
    };

    // 启动自动切换留言
    onMounted(() => {
      intervalId = setInterval(nextMessage, props.interval);
    });

    // 清除定时器
    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      currentIndex
    };
  }
};
</script>

<style scoped>
.message-container {
  width: 100%;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.message-box {
  position: relative;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.5;
}

.message-quote {
  font-size: 50px;
  color: #aaa;
  position: absolute;
  top: -10px;
  left: 20px;
}

.message-content {
  padding-left: 40px; /* 留出空间给引用符号 */
  text-align: left;
}

.message-user {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
}

.message-text {
  font-style: italic;
  color: #555;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

