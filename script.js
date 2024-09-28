document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');
    const logo = document.getElementById('logo');
    const rightImage = document.getElementById('rightImage');

    // Function to reset all classes to ensure the animations run correctly every time
    function resetClasses() {
        logo.classList.remove('logo-center', 'shrink-to-zero', 'move-to-side', 'white-background');
        loginForm.classList.remove('shrink-to-zero', 'form-visible');
        rightImage.classList.remove('fullscreen-image', 'shrink-to-zero', 'hide-elements');
    }

    loginButton.addEventListener('click', () => {
        // Reset the classes on all elements to start fresh each time
        resetClasses();

        // Change the login button to a loading state
        loginButton.innerHTML = '<div class="loading-circle"></div>';
        loginButton.disabled = true;

        // Step 1: Hide the login form and image first
        loginForm.classList.add('hide-elements'); // Hides the login form with opacity 0
        rightImage.classList.add('hide-elements'); // Hides the image with opacity 0

        setTimeout(() => {
            // Step 2: Move the logo to the center of the page and add rotation animation
            logo.classList.add('logo-center');

            setTimeout(() => {
                // Add white background when the logo is at the center
                logo.classList.add('white-background');

                setTimeout(() => {
                    // Step 3: Shrink the logo, form, and image to zero simultaneously
                    logo.classList.add('shrink-to-zero');
                    loginForm.classList.add('shrink-to-zero');
                    rightImage.classList.add('shrink-to-zero');

                    setTimeout(() => {
                        // Step 4: Expand the image to cover the entire screen from the center
                        rightImage.classList.remove('shrink-to-zero');
                        rightImage.classList.remove('hide-elements');
                        rightImage.classList.add('fullscreen-image');

                        setTimeout(() => {
                            // Step 5: Show the logo back on top of the expanded image
                            logo.classList.remove('shrink-to-zero');
                            logo.classList.add('logo-center');

                            setTimeout(() => {
                                // Step 6: Move the logo and image to their final positions (left and right)
                                logo.classList.remove('logo-center', 'white-background'); // Remove background when moving
                                logo.classList.add('move-to-side');
                                rightImage.classList.remove('fullscreen-image');

                                setTimeout(() => {
                                    // Step 7: Bring back the login form on the left side
                                    loginForm.classList.remove('shrink-to-zero');
                                    loginForm.classList.remove('hide-elements');
                                    loginForm.classList.add('form-visible');

                                    // Restore the login button to its original state
                                    loginButton.innerHTML = 'Login';
                                    loginButton.disabled = false;
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 500);
    });
});
