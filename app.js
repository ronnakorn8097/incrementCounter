const counters = document.querySelectorAll('.counter');
// ที่ใช้ querySelectorAll เพราะเรามี div class 3 ตัว มองเป็น array

// เอามา loop เพื่อเข้าถึง class นั้นๆ
counters.forEach(counter=>{
    counter.innerText = '0'
    const updateCounter = ()=>{
        //ใส่ + เพื่อให้ตัวเลข
        const target = +counter.getAttribute("data-target") // คุณสมบัติที่เรากำหนดไว้
        const start = +counter.innerText // ให้ start = 0
        const increment = target/100 // เอา target ที่ได้จากค่าเริ่มต้น หาร 200 
        // console.log(typeof(target)) // string

        // check ถ้า start ยังน้อยกว่า เป้าหมาย ก็ให้บวกเรื่อยๆ แล้วเรียกใช้ function updateCounter ทุกๆ 1 มิลลิ
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updateCounter,1)
        }
        // ถ้าไม่ใช้ ก็ให้ มัน = target นั้นก็คือ ค่า target
        else{
            counter.innerText = target
        }
    }
    updateCounter()
})