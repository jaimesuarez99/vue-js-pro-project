<template>
    <div class="log-in-body">
        <div class="login-container" id="login-container">
            <div class="form-container sign-up">
                <form>
                    <h1>Crear Cuenta</h1>
                    <div class="social-icons">
                        <a href="#" class="icon">
                            <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="#" class="icon">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="icon">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="#" class="icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <span>O usa tu email para registrarte</span>
                    <input type="text" autocomplete="name" placeholder="Nombre" name="r-name" id="r-input-name">
                    <input type="email" autocomplete="user" placeholder="Email" name="r-email" id="r-input-email">
                    <input type="password" autocomplete="password" placeholder="Contraseña" name="r-password" id="r-input-pass">
                    <button>Registrarse</button>
                </form>
            </div>
            <div class="form-container sign-in">
                <form>
                    <h1>Iniciar Sesión</h1>
                    <div class="social-icons">
                        <a href="#" class="icon">
                            <i class="fa-brands fa-google"></i>
                        </a>
                        <!-- <a href="#" class="icon">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="icon">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="#" class="icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a> -->
                    </div>
                    <span>o usa tu email y contraseña</span>
                    <input type="email" autocomplete="email" placeholder="Email" name="emailñ" id="input-email">
                    <input type="password" autocomplete="password" placeholder="Contraseña" name="password" id="input-pass">
                    <a href="#">¿Olvidaste Yu Contraseña?</a>
                    <button>Iniciar Sesión</button>
                </form>
            </div>
            <div class="toggle-container">
                <div class="login-toggle">
                    <div class="toggle-panel toggle-left">
                         <h1>Bienbenido de vuelta</h1>
                         <p>Entra con tus credenciales para usar todas nuestras caracterisitcas</p>
                         <button class="hidden" id="login">Iniciar Sesion</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                         <h1>Hola, Como Estas?</h1>
                         <p>Registrate para usar todas nuestras caracterisitcas</p>
                         <button class="hidden" id="register">Registrarte</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>