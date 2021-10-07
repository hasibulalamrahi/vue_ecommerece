<template>
    <div>
        <section id="home">
            <div class="text">
                <h5>NEW ARRIVALS</h5>
                <h1><span>Best Price</span>This year</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit <br> Consequuntur, officiis?</p>
                <button>Shop Now</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #home span{
        color:coral;
    }
    button{
        font-size:0.8rem;
        font-weight:700;
        outline:none;
        border:none;
        background-color:#1d1d1d;
        color:aliceblue;
        padding: 13px 30px;
        cursor:pointer;
        text-transform: uppercase;
        transition:0.3s ease;
    }
    button:hover{
        background-color: #3a3833;
    }

    #home{
        margin-top: 20px;
        padding: 5%;
        background-image: url("../assets/fashionImage/back.jpg");
        width:100%;
        height:50vh;
        background-size: cover;
        background-position: top  center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;


    }
    /* .text{
        align-content:space-between;
    } */


</style>