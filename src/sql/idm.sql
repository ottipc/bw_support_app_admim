create table idm.studie as
(select dbo3.studium.gguid, dbo3.studium.id, dbo3.studium.addressid, dbo3.studium.immatdate, 
dbo3.studium.exmatdate, dbo3.studium.exmatreason, dbo3.studium.degreecode, 
dbo3.studium.degree, dbo3.studium.university, dbo3.studium.capr_nameeng , 
dbo3.studium.capr_degreeshort, 
dbo3.profil.matriculationnumber,
dbo3.profil.givenname,
dbo3.profil.gender,
dbo3.profil.surname,
dbo3.studium.isnotifiable
 from dbo3.studium
 inner join dbo3.profil on dbo3.profil.addressid = dbo3.studium.addressid);

alter table idm.studie 
add foreign key (addressid) references idm.student (addressid);

alter table idm.studie 
add primary key (gguid);

alter table idm.studie
rename "id" to idd;

alter table idm.studie
add column "id" serial;
