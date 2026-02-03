
        (function () {
            function setTomorrowDate() {
                var el = document.getElementById('headerData');
                if (!el) return;

                var months = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                var today = new Date();
                var tomorrow = new Date(today);
                tomorrow.setDate(today.getDate() + 1);

                var day = tomorrow.getDate();
                var month = months[tomorrow.getMonth()];

                el.textContent = day + ' ' + month;
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', setTomorrowDate);
            } else {
                setTomorrowDate();
            }
        })();
