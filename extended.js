function chunkArrayLoop(a, e) {
    let t = [];
    for (let i = 0; i < a.length; i += e) {
        let n = [];
        for (let t = i; t < i + e && t < a.length; t++) n.push(a[t]);
        t.push(n)
    }
    return t
}
$("#previewSKE").on("click", (function(a) {
    var e, t, i = $("#countSigner .row").length,
        n = $("#SuratKeluarEksternal textarea").map((function() {
            if (req = $(this).is("[required]"), req) return this.id
        })).get();
    for (e = 0; e < n.length; ++e)
        if ("" == (m = $("#" + n[e]).val())) {
            var s = $("#" + n[e]).attr("data-label");
            return $("#" + n[e]).removeClass("form-control").addClass("form-control is-invalid"), alert(s + " Tidak Boleh Kosong")
        } for (t = 0; t < i; ++t)
        if ("" == (m = $("select[id=signer" + t + "]").val())) return alert("Signer Tidak Boleh Kosong");
    var r = [];
    $(".selectdarkReceiver").each((function() {
        r.push($(this).val())
    }));
    var l = [];
    $(".selectdarkTindasan").each((function() {
        l.push($(this).val())
    }));
    var o = [];
    $(".selectdarkSigner").each((function() {
        o.push($(this).val())
    }));
    var d = [];
    $("#tabRefrensi li").each((function() {
        d.push($(this).data("val")), d.push($(this).data("jenissurat"))
    }));
    var c = urlSKE,
        u = idSKE,
        p = data_typeSKE,
        m = $("input[id=jenis_surat]").val(),
        h = $("input[id=randKEY]").val(),
        v = o,
        f = dariSKE,
        g = $("input[id=lampiran]").val(),
        S = $("select[id=jenis_prior]").val(),
        k = $("select[id=kerahasiaan_surat]").val(),
        w = $("textarea[id=txt_perihal]").val(),
        D = CKEDITOR.instances.editor.getData(),
        b = $("#setPageHeader").is(":checked") ? 1 : 0,
        T = $("#setPageFooter").is(":checked") ? 1 : 0,
        P = urlPDFSKE;
    $.ajax({
        url: c,
        type: "POST",
        data: {
            id: u,
            data_type: p,
            kepadaArr: r,
            melaluiArr: "",
            refrensiArr: 0 != d.length ? chunkArrayLoop(d, 2) : "",
            tindasanArr: 0 != l.length ? l : "",
            jenis_surat: m,
            random_key: h,
            detail_signer: v,
            dari: f,
            lampiran: g || "",
            jenis_prior: S,
            tanggal_surat: "",
            kerahasiaan_surat: k,
            txt_perihal: w,
            kepada: "",
            tempat: "",
            surat: D,
            setPageHeader: b,
            setPageFooter: T
        },
        success: function(a) {
            $("#previewPDF").html('<iframe width="100%" height="700" src=' + P + ' title="PDF Result" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'), $("#previewModalPdf").modal("show")
        }
    })
})), $("#btnBtnCloseModalSKE").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "showPreview/closed",
        success: function(a) {
            console.log(a)
        }
    }), a.preventDefault()
})), $("#saveDraftSuratSKE").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "saveDraftSurat",
        success: function(a) {
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlsaveDraftSuratSKE)
            }))
        }
    }), a.preventDefault()
})), $("#updateDraftSuratSKE").on("click", (function(a) {
    var e = idSKE;
    $.ajax({
        type: "POST",
        url: urlupdateDraftSuratSKE1,
        data: {
            ids: e
        },
        success: function(a) {
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlupdateDraftSuratSKE2)
            }))
        }
    })
})), $("#submitSaveNoDinAntarDivBagSKE").on("click", (function(a) {
    "complete" == document.readyState && Swal.fire({
        title: "Apakah Yakin",
        text: "Telah Membuat Surat ini Dengan Benar!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Kirim"
    }).then((a => {
        a.value && (Swal.fire({
            title: "MEMPROSES",
            html: "Mengirim Notifikasi..!",
            allowOutsideClick: !1,
            showConfirmButton: !1
        }).then((a => {
            a.dismiss, Swal.DismissReason.timer
        })), $("#SuratKeluarEksternal").submit())
    }))
})), $("#submitSaveSuratMasuk").on("click", (function(a) {
    var e, t = $("#SuratMasuk textarea, input").map((function() {
        if (req = $(this).is("[required]"), req) return this.id
    })).get();
    for (e = 0; e < t.length; ++e)
        if ("" == $("#" + t[e]).val()) {
            var i = $("#" + t[e]).attr("data-label");
            return $("#" + t[e]).removeClass("form-control").addClass("form-control is-invalid"), alert(i + " Tidak Boleh Kosong")
        }
    "complete" == document.readyState && Swal.fire({
        title: "Apakah Yakin",
        text: "Telah Membuat Surat ini Dengan Benar!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Kirim"
    }).then((a => {
        a.value && (Swal.fire({
            title: "MEMPROSES",
            html: "Mengirim Notifikasi..!",
            allowOutsideClick: !1,
            showConfirmButton: !1
        }).then((a => {
            a.dismiss, Swal.DismissReason.timer
        })), $("#SuratMasuk").submit())
    }))
})), $(document).on("click", "#syncronizeSKE", (function(a) {
    $.ajax({
        type: "POST",
        url: urlsyncronizeSKE,
        cache: !1,
        delay: 800,
        success: function(a) {
            $("#receiver0").html(a)
        }
    })
})), $("#tambahHapusBtnTindasanSKE").on("click", (function(a) {
    var e = $("#countTindasan .row").length,
        t = "";
    t += '<div class="row">', t += '<div class="col-sm-3">', t += '<div class="form-group">', t += '<select class="form-control selectdarkTindasan" id="tindasan-kategori" name="tindasan[0][]" aria-label="Default select example" data-sub_kategori="0">', t += '<option value="direksi">DIREKSI</option>', t += '<option value="divisi">DIVISI</option>', t += '<option value="pekerja">PEKERJA</option>', t += '<option value="cabang">UNIT KERJA</option>', t += '<option value="eksternal">EKSTERNAL</option>', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-6">', t += '<div class="form-group">', t += '<select class="select2 selectdarkTindasan" id="tindasan0" name="tindasan[0][]" aria-label="Default select example" style="width: 100%; height: 200px;">', t += '"' + dataDireksiTindasan + '"', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-2">', t += '<div class="form-group">', t += '<span id="spanBtnEksternalSKE0"></span>', t += '<button class="btn btn-success" type="button" onclick="sub_tindasan();"><i class="fa fa-plus"></i></button>', t += "</div>", t += "</div>", t += "</div>", t += '</div> <div id="subTindasan" class="m-t-20"></div>', $("#countTindasan").append(t), $("#tindasan0").select2(), 0 != e ? ($("#countTindasan").replaceWith('<div class="ml-2 mt-2" id="countTindasan"></div>'), $("#tambahHapusBtnTindasanSKE").html("Tambah")) : $("#tambahHapusBtnTindasanSKE").html("Hapus")
})), $("#previewND").on("click", (function(a) {
    var e, t, i = $("#countSigner .row").length,
        n = $("#SuratNodinAntarDivBag textarea, input").map((function() {
            if (req = $(this).is("[required]"), req) return this.id
        })).get();
    for (e = 0; e < n.length; ++e)
        if ("" == (m = $("#" + n[e]).val())) {
            var s = $("#" + n[e]).attr("data-label");
            return $("#" + n[e]).removeClass("form-control").addClass("form-control is-invalid"), alert(s + " Tidak Boleh Kosong")
        } for (t = 0; t < i; ++t)
        if ("0" == (m = $("select[id=receiver" + t + "]").val())) return alert("Receiver Tidak Boleh Kosong");
    var r = [];
    $(".selectdarkReceiver").each((function() {
        r.push($(this).val())
    }));
    var l = [];
    $(".selectdarkTindasan").each((function() {
        l.push($(this).val())
    }));
    var o = [];
    $("#tabRefrensi li").each((function() {
        o.push($(this).data("val")), o.push($(this).data("jenissurat"))
    }));
    var d = [];
    $(".selectdarkSigner").each((function() {
        d.push($(this).val())
    }));
    var c = urlND,
        u = idND,
        p = data_typeND,
        m = $("input[id=jenis_surat]").val(),
        h = $("input[id=randKEY]").val(),
        v = d,
        f = dariND,
        g = $("input[id=lampiran]").val(),
        S = $("select[id=jenis_prior]").val(),
        k = $("select[id=kerahasiaan_surat]").val(),
        w = $("textarea[id=txt_perihal]").val(),
        D = CKEDITOR.instances.editor.getData(),
        b = $("#setPageHeader").is(":checked") ? 1 : 0,
        T = $("#setPageFooter").is(":checked") ? 1 : 0,
        P = urlPDFND;
    $.ajax({
        url: c,
        type: "POST",
        data: {
            id: u,
            data_type: p,
            kepadaArr: r,
            melaluiArr: "",
            refrensiArr: 0 != o.length ? chunkArrayLoop(o, 2) : "",
            tindasanArr: 0 != l.length ? l : "",
            jenis_surat: m,
            random_key: h,
            detail_signer: v,
            dari: f,
            lampiran: g || "",
            jenis_prior: S,
            tanggal_surat: "",
            kerahasiaan_surat: k,
            txt_perihal: w,
            kepada: "",
            tempat: "",
            surat: D,
            setPageHeader: b,
            setPageFooter: T
        },
        success: function(a) {
            $("#previewPDF").html('<iframe width="100%" height="700" src=' + P + ' title="PDF Result" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'), $("#previewModalPdf").modal("show")
        }
    })
})), $("#btnBtnCloseModalND").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "showPreview/closed",
        success: function(a) {
            console.log(a)
        }
    }), a.preventDefault()
})), $("#saveDraftSuratND").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "saveDraftSurat",
        success: function(a) {
            console.log(a), Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlsaveDraftSuratND)
            }))
        }
    }), a.preventDefault()
})), $("#updateDraftSuratND").on("click", (function(a) {
    var e = idND;
    $.ajax({
        type: "POST",
        url: urlupdateDraftSuratND1,
        data: {
            ids: e
        },
        success: function(a) {
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlupdateDraftSuratND2)
            }))
        }
    })
})), $("#submitSaveNoDinAntarDivBagND").click((function(a) {
    "complete" == document.readyState && Swal.fire({
        title: "Apakah Yakin",
        text: "Telah Membuat Surat ini Dengan Benar!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Kirim"
    }).then((a => {
        a.value && (Swal.fire({
            title: "MEMPROSES",
            html: "Mengirim Notifikasi..!",
            allowOutsideClick: !1,
            showConfirmButton: !1
        }).then((a => {
            a.dismiss, Swal.DismissReason.timer
        })), $("#SuratNodinAntarDivBag").submit())
    }))
})), $("#tambahHapusBtnTindasanND").on("click", (function(a) {
    var e = $("#countTindasan .row").length;
    console.log(e);
    var t = "";
    t += '<div class="row">', t += '<div class="col-sm-3">', t += '<div class="form-group">', t += '<select class="form-control selectdarkTindasan" id="tindasan-kategori" name="tindasan[0][]" aria-label="Default select example" data-sub_kategori="0">', t += '<option value="direksi">DIREKSI</option>', t += '<option value="divisi">DIVISI</option>', t += '<option value="bagian">BAGIAN</option>', t += '<option value="pekerja">PEKERJA</option>', t += '<option value="cabang">UNIT KERJA</option>', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-6">', t += '<div class="form-group">', t += '<select class="select2 selectdarkTindasan" id="tindasan0" name="tindasan[0][]" aria-label="Default select example" style="width: 100%; height: 200px;">', t += '"' + dataDireksiTindasan + '"', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-2">', t += '<div class="form-group">', t += '<button class="btn btn-success" type="button" onclick="sub_tindasan();"><i class="fa fa-plus"></i></button>', t += "</div>", t += "</div>", t += "</div>", t += '</div> <div id="subTindasan" class="m-t-20"></div>', $("#countTindasan").append(t), $("#tindasan0").select2(), 0 != e ? ($("#countTindasan").replaceWith('<div class="ml-2 mt-2" id="countTindasan"></div>'), $("#tambahHapusBtnTindasanND").html("Tambah")) : $("#tambahHapusBtnTindasanND").html("Hapus")
})), $("#previewNDIP").on("click", (function(a) {
    $("#loader, #loader2, #loader3").css("display", "block");
    var e, t, i = $("#data_bagian").length,
        n = $("#countSigner .row").length,
        s = $("select[id=data_bagian]").val(),
        r = $("#SuratNodinIjinPrinsip textarea, input").map((function() {
            if (req = $(this).is("[required]"), req) return this.id
        })).get();
    for (e = 0; e < r.length; ++e)
        if ("" == (v = $("#" + r[e]).val())) {
            var l = $("#" + r[e]).attr("data-label");
            return $("#" + r[e]).removeClass("form-control").addClass("form-control is-invalid"), alert(l + " Tidak Boleh Kosong")
        } for (t = 0; t < n; ++t)
        if ("" == (v = $("select[id=signer" + t + "]").val())) return alert("Signer Tidak Boleh Kosong");
    if (i > 0 && 0 == s) return alert("Dari Tidak Boleh Kosong"), setTimeout(showPage, 1e3);
    var o = [];
    $(".selectdarkReceiver").each((function() {
        o.push($(this).val())
    }));
    var d = [];
    $(".selectdarkTindasan").each((function() {
        d.push($(this).val())
    }));
    var c = [];
    $(".selectdarkMelalui").each((function() {
        c.push($(this).val())
    }));
    var u = [];
    $("#tabRefrensi li").each((function() {
        u.push($(this).data("val")), u.push($(this).data("jenissurat"))
    }));
    var p = urlNDIP,
        m = idNDIP,
        h = data_typeNDIP,
        v = $("input[id=jenis_surat]").val(),
        f = $("input[id=randKEY]").val(),
        g = $("select[id=signer0]").val(),
        S = 0 != i ? s : dariNDIP,
        k = $("input[id=lampiran]").val(),
        w = $("select[id=jenis_prior]").val(),
        D = $("select[id=kerahasiaan_surat]").val(),
        b = $("textarea[id=txt_perihal]").val(),
        T = CKEDITOR.instances.editor.getData(),
        P = $("#setPageHeader").is(":checked") ? 1 : 0,
        K = $("#setPageFooter").is(":checked") ? 1 : 0;
    $.ajax({
        url: p,
        type: "POST",
        data: {
            id: m,
            data_type: h,
            kepadaArr: o,
            melaluiArr: 0 != c.length ? c : "",
            refrensiArr: 0 != u.length ? chunkArrayLoop(u, 2) : "",
            tindasanArr: 0 != d.length ? d : "",
            jenis_surat: v,
            random_key: f,
            detail_signer: g,
            dari: S,
            lampiran: k || "",
            jenis_prior: w,
            kerahasiaan_surat: D,
            txt_perihal: b,
            surat: T,
            setPageHeader: P,
            setPageFooter: K
        },
        success: function(a) {
            return console.log(a);
            return $("#previewPDF").html('<iframe width="100%" height="700" src=' + urlPDFNDIP + ' title="PDF Result" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'), $("#previewModalPdf").modal("show"), setTimeout(showPage, 100)
        }
    })
})), $("#btnBtnCloseModalNDIP").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "showPreview/closed",
        success: function(a) {
            console.log(a)
        }
    }), a.preventDefault()
})), $("#saveDraftSuratNDIP").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "saveDraftSurat",
        success: function(a) {
            console.log(a), Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlsaveDraftSuratNDIP)
            }))
        }
    }), a.preventDefault()
})), $("#updateDraftSuratNDIP").on("click", (function(a) {
    var e = idNDIP;
    $.ajax({
        type: "POST",
        url: urlupdateDraftSuratNDIP1,
        data: {
            ids: e
        },
        success: function(a) {
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlupdateDraftSuratNDIP2)
            }))
        }
    })
})), $("#submitSaveNoDinAntarDivBagNDIP").on("click", (function(a) {
    "complete" == document.readyState && Swal.fire({
        title: "Apakah Yakin",
        text: "Telah Membuat Surat ini Dengan Benar!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Kirim"
    }).then((a => {
        a.value && (Swal.fire({
            title: "MEMPROSES",
            html: "Mengirim Notifikasi..!",
            allowOutsideClick: !1,
            showConfirmButton: !1
        }).then((a => {
            a.dismiss, Swal.DismissReason.timer
        })), $("#SuratNodinIjinPrinsip").submit())
    }))
})), $("#tambahHapusBtnTindasanNDIP").on("click", (function(a) {
    var e = $("#countTindasan .row").length,
        t = "";
    t += '<div class="row">', t += '<div class="col-sm-3">', t += '<div class="form-group">', t += '<select class="form-control selectdarkTindasan" id="tindasan-kategori" name="tindasan[0][]" aria-label="Default select example" data-sub_kategori="0">', t += '<option value="direksi">DIREKSI</option>', t += '<option value="divisi">DIVISI</option>', t += '<option value="bagian">BAGIAN</option>', t += '<option value="pekerja">PEKERJA</option>', t += '<option value="cabang">UNIT KERJA</option>', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-6">', t += '<div class="form-group">', t += '<select class="select2 selectdarkTindasan" id="tindasan0" name="tindasan[0][]" aria-label="Default select example" style="width: 100%; height: 200px;">', t += '"' + dataDireksiTindasan + '"', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-2">', t += '<div class="form-group">', t += '<button class="btn btn-success" type="button" onclick="sub_tindasan();"><i class="fa fa-plus"></i></button>', t += "</div>", t += "</div>", t += "</div>", t += '</div> <div id="subTindasan" class="m-t-20"></div>', $("#countTindasan").append(t), $("#tindasan0").select2(), 0 != e ? ($("#countTindasan").replaceWith('<div class="ml-2 mt-2" id="countTindasan"></div>'), $("#tambahHapusBtnTindasanNDIP").html("Tambah")) : $("#tambahHapusBtnTindasanNDIP").html("Hapus")
})), $("#tambahHapusBtnTindasanCabangNDIP").on("click", (function(a) {
    var e = $("#countTindasan .row").length,
        t = "";
    t += '<div class="row">', t += '<div class="col-sm-3">', t += '<div class="form-group">', t += '<select class="form-control selectdarkTindasan" id="tindasan-kategori" name="tindasan[0][]" aria-label="Default select example" data-sub_kategori="0">', t += '<option value="pekerja">PEKERJA</option>', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-6">', t += '<div class="form-group">', t += '<select class="select2 selectdarkTindasan" id="tindasan0" name="tindasan[0][]" aria-label="Default select example" style="width: 100%; height: 200px;">', t += '"' + listUserCabang + '"', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-2">', t += '<div class="form-group">', t += '<button class="btn btn-success" type="button" onclick="sub_tindasanCabang();"><i class="fa fa-plus"></i></button>', t += "</div>", t += "</div>", t += "</div>", t += '</div> <div id="subTindasan" class="m-t-20"></div>', $("#countTindasan").append(t), $("#tindasan0").select2(), 0 != e ? ($("#countTindasan").replaceWith('<div class="ml-2 mt-2" id="countTindasan"></div>'), $("#tambahHapusBtnTindasanCabangNDIP").html("Tambah")) : $("#tambahHapusBtnTindasanCabangNDIP").html("Hapus")
})), $("#previewSKI").on("click", (function(a) {
    $("#loader, #loader2, #loader3").css("display", "block");
    var e, t = $("#countSigner .row").length,
        i = $("#SuratKeluarInternal textarea, input, select").map((function() {
            if (req = $(this).is("[required]"), req) return this.id
        })).get();
    for (e = 0; e < i.length; ++e)
        if ("" == (f = $("#" + i[e]).val())) {
            var n = $("#" + i[e]).attr("data-label");
            return $("#" + i[e]).removeClass("form-control").addClass("form-control is-invalid"), alert(n + " Tidak Boleh Kosong"), setTimeout(showPage, 200)
        } for (p = 0; p < t; ++p)
        if ("" == (f = $("select[id=signer" + p + "]").val())) return alert("Signer Tidak Boleh Kosong"), setTimeout(showPage, 200);
    var s = [];
    $(".selectdarkReceiver").each((function() {
        s.push($(this).val())
    }));
    var r = s[1],
        l = [];
    $(".selectdarkTindasan").each((function() {
        l.push($(this).val())
    }));
    var o = [];
    $(".selectdarkSigner").each((function() {
        o.push($(this).val())
    }));
    var d = [];
    $("#tabRefrensi li").each((function() {
        d.push($(this).data("val")), d.push($(this).data("jenissurat"))
    }));
    for (var c = 0, u = 0, p = 0; p < s.length; p++) "AllPinca" == s[p] ? c += 1 : "AllBm" == s[p] && (u += 1);
    if (c > 0 && u > 0) return alert("Pilih -- Semua Pinca & BM -- Jika ingin mengirim ke seluruh Unit Kerja"), setTimeout(showPage, 200);
    if (c > 1) return alert("Tidak dapat Memilih -- Semua Pemimpin Cabang -- Dua Kali"), setTimeout(showPage, 200);
    if (u > 1) return alert("Tidak dapat Memilih -- Semua Building manager -- Dua Kali"), setTimeout(showPage, 200);
    if ("All" == r && s.length > 2 || "AllPinca" == r && "AllBm" == r) return alert("-- Semua .... -- Tidak Dapat Digabung Dengan Penerima Lain"), setTimeout(showPage, 200);
    var m = urlSKI,
        h = idSKI,
        v = data_typeSKI,
        f = $("input[id=jenis_surat]").val(),
        g = $("input[id=randKEY]").val(),
        S = o,
        k = dariSKI,
        w = $("input[id=lampiran]").val(),
        D = $("select[id=jenis_prior]").val(),
        b = $("select[id=kerahasiaan_surat]").val(),
        T = $("textarea[id=txt_perihal]").val(),
        P = CKEDITOR.instances.editor.getData(),
        K = $("#setPageHeader").is(":checked") ? 1 : 0,
        B = $("#setPageFooter").is(":checked") ? 1 : 0;
    $.ajax({
        url: m,
        type: "POST",
        data: {
            id: h,
            data_type: v,
            kepadaArr: s,
            melaluiArr: "",
            refrensiArr: 0 != d.length ? chunkArrayLoop(d, 2) : "",
            tindasanArr: 0 != l.length ? l : "",
            jenis_surat: f,
            random_key: g,
            detail_signer: S,
            dari: k,
            lampiran: w || "",
            jenis_prior: D,
            tanggal_surat: "",
            kerahasiaan_surat: b,
            txt_perihal: T,
            kepada: "",
            tempat: "",
            surat: P,
            setPageHeader: K,
            setPageFooter: B
        },
        success: function(a) {
            return $("#previewPDF").html('<iframe width="100%" height="700" src=' + urlPDFSKI + ' title="PDF Result" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'), $("#previewModalPdf").modal("show"), setTimeout(showPage, 100)
        }
    })
})), $("#btnBtnCloseModalSKI").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "showPreview/closed",
        success: function(a) {
            console.log("btnBtnCloseModalSKI")
        }
    }), a.preventDefault()
})), $("#saveDraftSuratSKI").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "saveDraftSurat",
        success: function(a) {
            console.log(a), Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlsaveDraftSuratSKI)
            }))
        }
    }), a.preventDefault()
})), $("#updateDraftSuratSKI").on("click", (function(a) {
    var e = idSKI;
    $.ajax({
        type: "POST",
        url: urlupdateDraftSuratSKI1,
        data: {
            ids: e
        },
        success: function(a) {
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlupdateDraftSuratSKI2)
            }))
        }
    })
})), $("#submitSaveNoDinAntarDivBagSKI").on("click", (function(a) {
    "complete" == document.readyState && Swal.fire({
        title: "Apakah Yakin",
        text: "Telah Membuat Surat ini Dengan Benar!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Kirim"
    }).then((a => {
        a.value && (Swal.fire({
            title: "MEMPROSES",
            html: "Mengirim Notifikasi..!",
            allowOutsideClick: !1,
            showConfirmButton: !1
        }).then((a => {
            a.dismiss, Swal.DismissReason.timer
        })), $("#SuratKeluarInternal").submit())
    }))
})), $("#tambahHapusBtnTindasanSKI").on("click", (function(a) {
    var e = $("#countTindasan .row").length,
        t = "";
    t += '<div class="row">', t += '<div class="col-sm-3">', t += '<div class="form-group">', t += '<select class="form-control selectdarkTindasan" id="tindasan-kategori" name="tindasan[0][]" aria-label="Default select example" data-sub_kategori="0">', t += '<option value="direksi">DIREKSI</option>', t += '<option value="divisi">DIVISI</option>', t += '<option value="bagian">BAGIAN</option>', t += '<option value="pekerja">PEKERJA</option>', t += '<option value="cabang">UNIT KERJA</option>', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-6">', t += '<div class="form-group">', t += '<select class="select2 selectdarkTindasan" id="tindasan0" name="tindasan[0][]" aria-label="Default select example" style="width: 100%; height: 200px;">', t += '"' + dataDireksiTindasan + '"', t += "</select>", t += "</div>", t += "</div>", t += '<div class="col-sm-2">', t += '<div class="form-group">', t += '<button class="btn btn-success" type="button" onclick="sub_tindasan();"><i class="fa fa-plus"></i></button>', t += "</div>", t += "</div>", t += "</div>", t += '</div> <div id="subTindasan" class="m-t-20"></div>', $("#countTindasan").append(t), $("#tindasan0").select2(), 0 != e ? ($("#countTindasan").replaceWith('<div class="ml-2 mt-2" id="countTindasan"></div>'), $("#tambahHapusBtnTindasanSKI").html("Tambah")) : $("#tambahHapusBtnTindasanSKI").html("Hapus")
})), $("#previewEdit" + jenis_surat).on("click", (function(a) {
    $("#loader, #loader2, #loader3").css("display", "block");
    var e, t, i, n = $("#countSigner .row").length,
        s = $("#data_bagian").length,
        r = $("select[id=data_bagian]").val(),
        l = $("#SuratNodinIjinPrinsip textarea, input").map((function() {
            if (req = $(this).is("[required]"), req) return this.id
        })).get();
    for (e = 0; e < l.length; ++e)
        if ("" == (S = $("#" + l[e]).val())) {
            var o = $("#" + l[e]).attr("data-label");
            return $("#" + l[e]).removeClass("form-control").addClass("form-control is-invalid"), alert(o + " Tidak Boleh Kosong"), setTimeout(showPage, 200)
        } for (t = 0; t < n; ++t)
        if ("" == (S = $("select[id=signer" + t + "]").val())) return alert("Signer Tidak Boleh Kosong"), setTimeout(showPage, 200);
    for (i = 0; i < n; ++i)
        if ("0" == (S = $("#SuratNodinAntarDivBag select[id=receiver" + i + "]").val())) return alert("Penerima Tidak Boleh Kosong"), setTimeout(showPage, 200);
    if (s > 0 && 0 == r) return alert("Dari Tidak Boleh Kosong");
    var d = [];
    $(".selectdarkReceiver").each((function() {
        d.push($(this).val())
    }));
    var c = d[1],
        u = [];
    $(".selectdarkTindasan").each((function() {
        u.push($(this).val())
    }));
    var p = [];
    $(".selectdarkMelalui").each((function() {
        p.push($(this).val())
    }));
    var m = [];
    $(".selectdarkSigner").each((function() {
        m.push($(this).val())
    }));
    var h = [];
    if ($("#tabRefrensi li").each((function() {
            h.push($(this).data("val")), h.push($(this).data("jenissurat"))
        })), "All" == c && d.length > 2) return alert("Penerima --Semua-- Tidak Bisa Digabung Dengan Penerima Lain"), setTimeout(showPage, 200);
    var v = urlEdit,
        f = idEdit,
        g = data_typeEdit,
        S = $("input[id=jenis_surat]").val(),
        k = $("input[id=randKEY]").val(),
        w = "SKE" == S || "SKI" == S || "ND" == S ? m : $("select[id=signer0]").val(),
        D = 0 != s ? r : dariEdit,
        b = $("input[id=lampiran]").val(),
        T = $("select[id=jenis_prior]").val(),
        P = $("select[id=kerahasiaan_surat]").val(),
        K = $("textarea[id=txt_perihal]").val(),
        B = CKEDITOR.instances.editor.getData(),
        I = $("#setPageHeader").is(":checked") ? 1 : 0,
        y = $("#setPageFooter").is(":checked") ? 1 : 0,
        _ = urlPDFEdit;
    $.ajax({
        url: v,
        type: "POST",
        data: {
            id: f,
            data_type: g,
            kepadaArr: d,
            melaluiArr: 0 != p.length ? p : "",
            refrensiArr: 0 != h.length ? chunkArrayLoop(h, 2) : "",
            tindasanArr: 0 != u.length ? u : "",
            jenis_surat: S,
            random_key: k,
            detail_signer: w,
            dari: D,
            lampiran: b || "",
            jenis_prior: T,
            tanggal_surat: "",
            kerahasiaan_surat: P,
            txt_perihal: K,
            surat: B,
            setPageHeader: I,
            setPageFooter: y
        },
        success: function(a) {
            return $("#previewPDF").html('<iframe width="100%" height="700" src=' + _ + ' title="PDF Result" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'), $("#previewModalPdf").modal("show"), setTimeout(showPage, 100)
        }
    })
})), $("#btnBtnCloseModalEdit").on("click", (function(a) {
    $.ajax({
        type: "POST",
        url: "../showPreview/closed",
        success: function(a) {
            console.log("closed")
        }
    }), a.preventDefault()
})), $("#updateDraftSuratEdit").on("click", (function(a) {
    var e = idEdit;
    $.ajax({
        type: "POST",
        url: urlupdateDraftSuratEdit1,
        data: {
            ids: e
        },
        success: function(a) {
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <strong></strong> draft seconds.",
                timer: 1e3
            }).then((a => {
                a.dismiss === Swal.DismissReason.timer && (window.location.href = urlupdateDraftSuratEdit2)
            }))
        }
    })
})), $("#submitSaveNoDinAntarDivBag" + jenis_surat).on("click", (function(a) {
    "complete" == document.readyState && Swal.fire({
        title: "Apakah Yakin",
        text: "Telah Membuat Surat ini Dengan Benar!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Kirim"
    }).then((a => {
        if (a.value) {
            switch (Swal.fire({
                    title: "MEMPROSES",
                    html: "Mengirim Notifikasi..!",
                    allowOutsideClick: !1,
                    showConfirmButton: !1
                }).then((a => {
                    a.dismiss, Swal.DismissReason.timer
                })), jenis_surat) {
                case "SKI":
                    values = "#SuratKeluarInternal";
                    break;
                case "SKE":
                    values = "#SuratKeluarEksternal";
                    break;
                case "ND":
                    values = "#SuratNodinAntarDivBag";
                    break;
                case "NDIP":
                    values = "#SuratNodinIjinPrinsip"
            }
            $(values).submit()
        }
    }))
}));
