<template>
    <div>
        <h3>{{message}}-request</h3>
        <form v-on:submit.prevent="sendData">
            <div class="form-group">
                <label for="username">Username</label>
                <input id="username" type="text" name="username" v-model="username" autocomplete="username"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" v-model="password" autocomplete="current-password"/>
            </div>
            <input type="submit"/>
        </form>
        <h3>Result:</h3>
        <pre>{{result}}</pre>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                message: "",
                result: {},
                error: ""
            }
        },
        methods: {
            sendData: function() {
                const data = {
                    username: this.username,
                    password: this.password,
                }
                axios.post("/post", data)
                    .then(result => {
                        this.result = result.data;
                    })
                    .catch(error => {
                        this.error = error.data;
                    })
            }
        }
    }
</script>

<style>
    div.form-group {
        padding: 5px;
    }

    div.form-group > * {
        padding: 5px;
    }

    div.form-group input {
        display: inline-block;
    }

</style>