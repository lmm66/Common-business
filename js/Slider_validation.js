window.onload = function () {
  let dragContainer = document.querySelector('#dragContainer')
  let dragBg = document.querySelector('#dragBg')
  let dragText = document.querySelector('#dragText')
  let dragHandler = document.querySelector('#dragHandler')
  // 滑块最大偏移量 = 滑块验证容器长度 - 滑块长度
  let maxHandlerOffset = dragContainer.clientWidth - dragHandler.clientWidth
  // 是否验证成功标记
  let isVertifySuccess = false
  initDrag()
  function initDrag() {
    dragText.textContent = '拖动滑块验证'
    dragHandler.addEventListener('mousedown', onDragHandlerDown)
  }

  function onDragHandlerDown() {
    document.addEventListener('mousemove', onDragHandlerMove)
    document.addEventListener('mouseup', onDragHandlerUp)
  }

  function onDragHandlerMove(e) {
    // clientX 属性返回鼠标指针的水平坐标（根据当前窗口）
    let left = e.clientX - dragHandler.clientWidth / 2
    if (left < 0) {
      left = 0
    } else if (left > maxHandlerOffset) {
      left = maxHandlerOffset
    }
    dragHandler.style.left = left + 'px'
    dragBg.style.width = dragHandler.style.left
  }

  function onDragHandlerUp(e) {
    document.removeEventListener('mousemove', onDragHandlerMove)
    let left = e.clientX - dragHandler.clientWidth / 2
    if (left >= maxHandlerOffset) {
      vertifySuccess()
    } else {
      // 初始化滑块移动量
      dragHandler.style.left = 0
      dragBg.style.width = 0
    }
  }

  // 验证成功
  function vertifySuccess() {
    isVertifySuccess = true
    dragText.textContent = '验证通过'
    dragText.style.color = 'white'
    dragHandler.setAttribute('class', 'dargHandlerOkBg')
    dragHandler.removeEventListener('mousedown', onDragHandlerDown)
    document.removeEventListener('mousemove', onDragHandlerMove)
    document.removeEventListener('mouseup', onDragHandlerUp)
    // 设置跳转
    window.location.href =
      'https://blog.csdn.net/m0_53375764?spm=1000.2115.3001.5343'
  }
}
