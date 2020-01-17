<template>
    <div id = "vk-auth">

        <div class = "info"></div>
        <div class = "input">

            <p class = "sub-input">Введите id</p>
            <div class = "input-user-id">
                <input v-model = "inputID"  type="number">
                <img src = "../../static/img/ico/send.svg"
                    :class = "{active: isInputNumber}"
                    v-on:click = "test"
                >
            </div>
            <p class = "sub-p">или</p>
            <button class = "button button-vk button-link button-img">
                <img src = "../../static/img/logo/vk/vk-back.svg" alt = "vk logo">
                <p>Войти через ВК</p>
                <a href = "http://oauth.vk.com/authorize?client_id=7280361&redirect_uri=https://api-music.jenesius.com/auth/vk&response_type=code"></a>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppVkAuth",
        data:function(){
            return {
                inputID:""
            }
        },
        computed:{
            isInputNumber:function () {
                let tmp =parseInt(this.inputID, 10);
                return (isNaN(tmp));
            }
        },
        methods:{
            test: function(){
                alert('getUserID');
                this.$emit('tryAuth', this.inputID);
            }
        }
    }
</script>

<style scoped>
#vk-auth>.input{
    display: flex;
    flex-direction: column;

    padding: 10px;
}
#vk-auth>.input>.sub-p{
    color:var(--gray1);
    padding: 10px;
    font-size: 13px;

    text-align: center;
}
.button{
    display: flex;
    align-items: center;
    justify-content: center;


    width: 100%;

    border: 0;
    border-radius: 4px;
    padding: 8px;

    font-size: 13px;

}
.button-vk{
    background-color: var(--black4);
    color:white;
    font-weight: 500;
}
.button-link{
    position: relative;
}
.button-img>img{
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;

    height: 24px;

    margin: auto;

}
.button-link>a{
    position: absolute;
    left:0;
    top:0;

    z-index: 1;

    height: 100%;
    width: 100%;

    text-decoration: none;

}
.sub-input{
    color:var(--gray1);

    font-size: 12px;
}

#vk-auth>.input>.input-user-id{
    width: 100%;
    background-color:var(--black4);
    height: 38px;

    border: 0;
    border-radius: 4px;

    position: relative;

    overflow: hidden;
}
#vk-auth>.input>.input-user-id>input{

    border: 0;
    outline: none;

    height: 100%;
    width: calc(100% - 60px);
    padding-left: 10px;

    color:var(--white1);

    background-color: transparent;

}
#vk-auth>.input>.input-user-id>img{
    height: 16px;

    position: absolute;
    top: 0;
    bottom: 0;

    margin: auto;
    right: 16px;

    transition: var(--fast);
    padding: 8px;
}

#vk-auth>.input>.input-user-id>.active{
    right:-28px;
}
</style>