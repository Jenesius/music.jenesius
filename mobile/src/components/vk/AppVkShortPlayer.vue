<template>
    <div id = "short-vk-player">
        <div class = "info-block">
            <div class = "avatar">
                <img src = "./test.jpg" alt = "avatar">
            </div>
            <div class = "title">
                <p>Голова, чтобы думать</p>
            </div>
        </div>
        <div class = "nav">
            <div class = "active">
                <div>
                    <img src = "./../../static/img/ico/audio/play.svg" alt = "active">
                </div>

            </div>
            <div class = "next">
                <div>
                    <img src = "./../../static/img/ico/audio/next.svg" alt = "next">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AppVkShortPlayer"
    }
</script>

<style scoped>
#short-vk-player{
    height: 62px;
    width: 100%;

    display: flex;

    background-color: var(--black3);
}
#short-vk-player>div{
    display: flex;
}

#short-vk-player>.info-block{
    flex-grow: 1;
}
#short-vk-player>.info-block>.avatar{
    padding: 8px 10px;

}
#short-vk-player>.info-block>.avatar>img{
    height: 46px;
    width: 46px;

    border-radius: 6px;
}
#short-vk-player>.info-block>.title{
    align-items: center;
    display: flex;

    color:var(--white1);
    font-size: 15px;
}
#short-vk-player>.nav{
    width: 120px;
}
#short-vk-player>.nav>div{
    display: flex;
    align-items: center;
    justify-content: center;

    flex-grow: 1;
}
#short-vk-player>.nav>div>div{
    height: 37px;
    width: 37px;

    border-radius: 50%;
    transition: 0.3s;


    display: flex;
    align-items: center;
    justify-content: center;
}
#short-vk-player>.nav>div>div:active{
    background-color: var(--black4);
}
#short-vk-player>.nav>.next>div:active>img{
    transform: translateX(4px);
}
#short-vk-player>.nav>.active img{

    height: 20px;

}

#short-vk-player>.nav>.next img{
    height: 20px;
    transition: 0.2s;
}
</style>