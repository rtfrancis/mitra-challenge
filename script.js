(function() {
    $.ajax({
        url: "https://develop.mitra-intelligence.com/test/event/periods",
        method: "GET",
        success: function(events) {
            for (let i = 0; i < events.data.length; i++) {
                // console.log(events.data[i].logo);
                $(".slider").append(
                    `<div class='eventCard'>
                        <img src=${events.data[i].hero} + ><br>
                        <span class="cardInfo" >
                        <span class='cardTitle'>${
                            events.data[i].event_title
                        } - ${new Date(events.data[i].start_date)
                        .toString()
                        .slice(11, 15)}
                        </span><br>
                        <span>${new Date(events.data[i].start_date)
                            .toString()
                            .slice(3, 11)} - ${new Date(events.data[i].end_date)
                        .toString()
                        .slice(3, 15)}</span><br>
                        <span>${events.data[i].city}</span>
                        </span>
                    </div>`
                );
            }
            $(".slider").append(`<img class="nextKey" src="public/next.png">`);
        }
    });
})();
