// script.js - Mealy 웹사이트 인터랙티브 기능

document.addEventListener('DOMContentLoaded', function() {
    // 관찰할 요소들 선택
    const menuItems = document.querySelectorAll('.menu-item');
    const processItems = document.querySelectorAll('.process-item');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    // Intersection Observer 옵션
    const options = {
      root: null, // viewport를 기준으로 관찰
      rootMargin: '0px', // 여백 없음
      threshold: 0.4 // 요소의 40%가 보일 때 콜백 실행
    };
    
    // 메뉴 아이템 관찰자 생성
    const menuObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 화면에 나타나면 호버 클래스 추가
          setTimeout(() => {
            entry.target.classList.add('hover-effect');
            
            // 이미지에 밝기 효과 적용
            const img = entry.target.querySelector('img');
            if (img) img.style.filter = 'brightness(50%)';
            
            // 호버 텍스트 표시
            const hoverText = entry.target.querySelector('.menu-hover');
            if (hoverText) {
              hoverText.style.opacity = '1';
              hoverText.style.transform = 'translateY(0)';
            }
          }, 300); // 약간의 지연 효과
          
          // 3초 후에 호버 효과 제거 (선택적)
          setTimeout(() => {
            entry.target.classList.remove('hover-effect');
            
            // 이미지 효과 제거
            const img = entry.target.querySelector('img');
            if (img) img.style.filter = '';
            
            // 호버 텍스트 숨기기
            const hoverText = entry.target.querySelector('.menu-hover');
            if (hoverText) {
              hoverText.style.opacity = '';
              hoverText.style.transform = '';
            }
          }, 4000);
        }
      });
    }, options);
    
    // 프로세스 아이템 관찰자 생성
    const processObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 화면에 나타나면 호버 효과 추가
          setTimeout(() => {
            entry.target.classList.add('hover-effect');
            
            // 아이콘 색상 변경
            const icon = entry.target.querySelector('.icon-container');
            if (icon) icon.style.backgroundColor = 'var(--main-color-dark)';
            
            // 요소를 위로 이동하는 효과
            entry.target.style.transform = 'translateY(-10px)';
          }, 300 + Math.random() * 300); // 약간의 랜덤 지연 효과
          
          // 3초 후에 호버 효과 제거 (선택적)
          setTimeout(() => {
            entry.target.classList.remove('hover-effect');
            
            // 아이콘 색상 복원
            const icon = entry.target.querySelector('.icon-container');
            if (icon) icon.style.backgroundColor = '';
            
            // 원래 위치로 복원
            entry.target.style.transform = '';
          }, 4000);
        }
      });
    }, options);
    
    // 후기 아이템 관찰자 생성
    const testimonialObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 화면에 나타나면 호버 효과 추가
          setTimeout(() => {
            entry.target.classList.add('hover-effect');
            entry.target.style.transform = 'translateX(5px)';
            entry.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
          }, 300 + Math.random() * 500); // 랜덤 지연 효과
          
          // 4초 후에 호버 효과 제거 (선택적)
          setTimeout(() => {
            entry.target.classList.remove('hover-effect');
            entry.target.style.transform = '';
            entry.target.style.boxShadow = '';
          }, 4500);
        }
      });
    }, options);
    
    // 각 요소에 관찰자 연결
    menuItems.forEach(item => {
      menuObserver.observe(item);
      
      // 호버 이벤트도 함께 처리
      item.addEventListener('mouseenter', function() {
        this.classList.add('hover-effect');
        const img = this.querySelector('img');
        if (img) img.style.filter = 'brightness(50%)';
        
        const hoverText = this.querySelector('.menu-hover');
        if (hoverText) {
          hoverText.style.opacity = '1';
          hoverText.style.transform = 'translateY(0)';
        }
      });
      
      item.addEventListener('mouseleave', function() {
        this.classList.remove('hover-effect');
        const img = this.querySelector('img');
        if (img) img.style.filter = '';
        
        const hoverText = this.querySelector('.menu-hover');
        if (hoverText) {
          hoverText.style.opacity = '';
          hoverText.style.transform = '';
        }
      });
    });
    
    processItems.forEach(item => {
      processObserver.observe(item);
      
      // 호버 이벤트 연결
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        const icon = this.querySelector('.icon-container');
        if (icon) icon.style.backgroundColor = 'var(--main-color-dark)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = '';
        const icon = this.querySelector('.icon-container');
        if (icon) icon.style.backgroundColor = '';
      });
    });
    
    testimonialItems.forEach(item => {
      testimonialObserver.observe(item);
      
      // 호버 이벤트 연결
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
        this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
    
    // 모바일 메뉴 토글
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        // 모바일 환경에서 메뉴 토글 기능 설정
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            // 네비게이션 링크 클릭 시 스크롤 이동 후 자동으로 닫기
            header.classList.remove('active');
          });
        });
      }
    };
    
    // 화면 크기 변경 시 이벤트
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // 스크롤 시 헤더 디자인 변경
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
      } else {
        header.style.boxShadow = '';
        header.style.background = '';
      }
    });
  });