const titleBox = document.querySelector(".title-box");
const titleBoxFlip = document.querySelector(".title-box.flip");
const titleBoxZoom = document.querySelector(".title-box.zoom");

let counterTop = 0;
let counterHeight = 0;

window.addEventListener("scroll", () =>{
    let lineGrow = document.querySelector(".line-grow");

    counterHeight = scrollY/1.2;
    lineGrow.style.height = counterHeight+ "px";
    counterTop = scrollY/8;
    lineGrow.style.transform = `translateY(${counterTop}px)`;

    if(scrollY > 300){
        titleBox.classList.add("active-title-box");
        if(scrollY > 550){
            document.querySelector(".icon-animation:nth-child(2)").classList.add("active");
            if(scrollY > 850){
                document.querySelector(".icon-animation:nth-child(3)").classList.add("active");
                if(scrollY > 1200){
                    document.querySelector(".icon-animation:nth-child(4)").classList.add("active");
                    if(scrollY > 1600){
                        document.querySelector(".icon-animation:nth-child(5)").classList.add("active");
                    }else{
                        document.querySelector(".icon-animation:nth-child(5)").classList.remove("active")
                    }
                }else{
                    document.querySelector(".icon-animation:nth-child(4)").classList.remove("active")
                }
            }else{
                document.querySelector(".icon-animation:nth-child(3)").classList.remove("active")
            }
        }else{
            document.querySelector(".icon-animation:nth-child(2)").classList.remove("active")
        }
    }else{
        titleBox.classList.remove("active-title-box")
    }

    if(scrollY > 1870){
        titleBoxFlip.classList.add("active-title-box");
        if(scrollY > 1970){
            document.querySelector(".icon-animation.flip:nth-child(2)").classList.add("active");
            if(scrollY > 2400){
                document.querySelector(".icon-animation.flip:nth-child(3)").classList.add("active");
                if(scrollY > 2700){
                    document.querySelector(".icon-animation.flip:nth-child(4)").classList.add("active");
                    if(scrollY > 3050){
                        document.querySelector(".icon-animation.flip:nth-child(5)").classList.add("active");
                    }else{
                        document.querySelector(".icon-animation.flip:nth-child(5)").classList.remove("active");
                    }
                }else{
                    document.querySelector(".icon-animation.flip:nth-child(4)").classList.remove("active");
                }
            }else{
                document.querySelector(".icon-animation.flip:nth-child(3)").classList.remove("active");
            }
        }else{
            document.querySelector(".icon-animation.flip:nth-child(2)").classList.remove("active");
        }
    }else{
        titleBoxFlip.classList.remove("active-title-box")
    }

    if(scrollY > 3370){
        titleBoxZoom.classList.add("active-title-box");
        if(scrollY > 3550){
            document.querySelector(".icon-animation.zoom:nth-child(2)").classList.add("active");
            if(scrollY > 3950){
                document.querySelector(".icon-animation.zoom:nth-child(3)").classList.add("active");
            }else{
                document.querySelector(".icon-animation.zoom:nth-child(3)").classList.remove("active");
            }
        }else{
            document.querySelector(".icon-animation.zoom:nth-child(2)").classList.remove("active");
        }
    }else{
        titleBoxZoom.classList.remove("active-title-box")
    }
})

