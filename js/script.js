function Calcular()
{
    let tipoTasa = parseInt($("#tipoTasa").val());
    let tasaIngresada = parseInt($("#tasa").val());
    let tasa = 0, fechas = [], totalInvertido = 0, saldoTotal = 0, gananciaTotal = 0;
    let monto = parseFloat($("#monto").val());
    let semanas = parseInt($("#semanas").val());
    let inversion = parseFloat($("#inversion").val());
    let saldo = 0, interes = 0, total = 0;
    let tabla = $("#tableBody");
    const fecha = new Date();
    
    switch (tipoTasa) {
        case 1:
            tasa = tasaIngresada/360;
            break;
        case 2:
            tasa = tasaIngresada/360*7;
            break;
        case 3:
            tasa = tasaIngresada/360*15;
            break;
        case 4:
            tasa = tasaIngresada/360*30;
            break;
        case 5:
            tasa = tasaIngresada/360*90;
            break;
        case 6:
            tasa = tasaIngresada;
            break;
        default:
            break;
    }

    
    if(tasa > 0)
    {
        for (let i = 0; i <= semanas; i++) {
            if (i == 0)
            {
                monto = inversion;
                saldo = parseFloat($("#monto").val()) + inversion;
            }
            else
            {
                monto = $("#monto").val();
                saldo = parseFloat($("#monto").val()) + total;
            }
            interes = (saldo*(tasa*0.01))/52;
            total = saldo + interes;
            fechas.push(fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
            //console.log(fechas[i]);
            tabla = tabla.append("<tr><td>" + fechas[i] + "</td><td>$" + monto + "</td>" + "</td><td>$" + saldo + "</td>" + "</td><td>$" + interes + "</td>" + "</td><td>$" + total + "</td></tr>");
            fecha.setDate(fecha.getDate() + 7);
            totalInvertido = parseFloat(totalInvertido) + parseFloat(monto);
            console.log(totalInvertido);
        }
        saldoTotal = total;
        gananciaTotal = saldoTotal - totalInvertido;
        $("#inverTotal").val('$' + totalInvertido); 
        $("#saldoTotal").val('$' + saldoTotal);
        $("#ganancia").val('$' + gananciaTotal);   
    }
    else
    {
        alert("La tasa ingresada es incorrecta");
    }

}