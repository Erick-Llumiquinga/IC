--funcion insertar INICIO
create or replace function insetarProd()
returns trigger
as
$$
    BEGIN
    raise notice 'funcion disparador,accion sobre las columnas(nombreProd,fechaElav,fechaVenc,cantidadProd)'

    --nombre producto
    if old.nombre = new.nombre  then raise exception 
    'El producto ya existe!!';
 	end if;
    --fechaElab producto
    if old.fechaElab <> new.fechaElab then raise exception 
    'Fecha de elaboracion nueva';
 	end if;
    --fechaVenc producto
    if old.fechaVence <> new.fechaVence then raise exception 
    'Fecha de vencimiento nueva';
 	end if;
    --cantidad producto
    if old.cantidadProd <> new.cantidadProd then raise exception 
    'Cantidad nueva de productos';
 	end if;
    return new;
    END
$$
language plpgsql;

/*TRIGGER*/
CREATE  TRIGGER trInsertProd
    BEFORE INSERT OR UPDATE OF
        nombreProd
        precioUnit,
        fechaElab,
        fechaVenc,
        cantidadProd
     ON productos
     REFERENCING 
		OLD AS precioUnit,fechaElab,fechaVenc 
		NEW AS precioUnit,fechaElab,fechaVenc
    for each row
execute procedure insetarProd();
/*TRIGGER fin*/


saver eñl nombre de la existencia del produco y categoria del producto que tenga mayor precio