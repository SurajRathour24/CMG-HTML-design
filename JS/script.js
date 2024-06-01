document.querySelector('.menu-toggle').addEventListener('click', function() {
        let navBlocks = document.querySelectorAll('.nav-blocks');
        navBlocks.forEach(function(block) {
            block.classList.toggle('show');
        });
    });
