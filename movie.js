function tampilkanSemuaMovie(){
    $('#listmovie').html('');
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type :'get',
        dataType : 'json',
        data: {
            'apikey': '3b54c071',
            's' : $('#carijudul').val()
        },
        success : function(result){
            let movie = result.Search;
            //console.log(movie);
            if(result.Response == "True") {
                $.each(movie, function(i,data){
                    $('#listmovie').append(`
                        <div class="col col-md-4 mb-3">
                            <div class="card">
                                <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ data.Title +`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+data.Year+`</h6>  
                                    <button type="button" class="btn btn-primary lihatdetail" data-toggle="modal" data-target="#exampleModal"
                                    data-id="` + data.imdbID + `">Lihat Detail</button>
                                </div>
                            </div>
                        </div>
                    `)
                })
            } else {
                $('#listmovie').html(`
                    <div class="col">
                        <h3 class="text-center">` + result.Error + `</h3>
                    </div>
                `);

            }
        }
    });
}

$('#tombolcari').on('click', function (){
    tampilkanSemuaMovie();
});

$('#carijudul').on('keyup', function(e){
    if(e.keyCode == 13){
        tampilkanSemuaMovie();
    }
});

$('#listmovie').on('click', '.lihatdetail', function(){
    let idmovie = $(this).data('id');
    //console.log(idmovie);
    $.ajax({
        url:'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '3b54c071',
            'i': idmovie
        },
        success: function (result){
            //console.log(result);
            if(result.Response == "True"){
                $('.modal-title').html('');
                $('.modal-title').html(result.Title);
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-4">
                            <img src="` + result.Poster + `" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item">Year: `+ result.Year +`</li>
                            <li class="list-group-item">Released: `+ result.Released +`</li>
                            <li class="list-group-item">Genre: `+ result.Genre +`</li>
                            <li class="list-group-item">Actors: `+ result.Actors +`</li>
                            <li class="list-group-item">Plot: `+ result.Plot +`</li>
                        </ul>
                        </div>
                    </div>
                `)
            }
        }
    });
});