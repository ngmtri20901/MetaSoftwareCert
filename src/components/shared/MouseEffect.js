import React, { useState, useEffect } from 'react';

function MouseMoveEffect() {
  // Lưu trữ vị trí của chuột
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Cập nhật vị trí chuột khi người dùng di chuyển chuột
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Gắn sự kiện di chuyển chuột vào window
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: loại bỏ sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y - 25,  // Cộng trừ để căn chỉnh đối tượng
          left: mousePosition.x - 25,
          width: 50,
          height: 50,
          backgroundColor: 'yellow',
          borderRadius: '50%',
          pointerEvents: 'none', // Đảm bảo đối tượng không chặn các sự kiện chuột khác
          transition: 'transform 0.1s ease-out', // Tạo hiệu ứng mượt mà
        }}
      />
    </div>
  );
}

export default MouseMoveEffect;
