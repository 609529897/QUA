let observer = function () {
  const listeners = []
  // 订阅事件
  const subscribe = function (name, listener) {
    if (!listeners[name]) {
      listeners[name] = []
    }
    listeners[name].push(listener)
    return () => {
      const index = listeners[name].indexOf(listener)
      listeners[name].splice(index, 1)
    }
  }
  // 通知事件
  const notify = function (name, ...args) {
    (listeners[name] || []).map((listener) => listener.call(...args))
  }
  return { subscribe, notify }
}

// 保证只创建一次实例
let observerInstance
if (!observerInstance) {
  observerInstance = observer()
}

export default observerInstance