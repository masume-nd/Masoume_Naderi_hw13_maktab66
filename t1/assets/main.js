let counter = 0;
$(document).ready(function(){
    $("#addBtn").click(function(){
    let tr = createEl("tr");
    let firstTd = createEl("td")
    let secondTd = createEl("td")
    let thirdTd = createEl("td")
    let forthTd = createEl("td")

    let deleteBtn = createEl("button");
    deleteBtn.classList = "deletBtn btn btn-danger";
    $(deleteBtn).click(Remove);
    $(deleteBtn).css("margin-right", "10px")
    let icon1 = createEl('i');
    icon1.classList = 'fa fa-trash me-2'
    deleteBtn.append(icon1);
    let t = document.createTextNode("Delete");
    deleteBtn.appendChild(t);
  

    cloneBtn = createEl("button");
    cloneBtn.classList = 'btn btn-primary';
    let icon2 = createEl('i');
    icon2.classList = 'fa fa-clone  me-2'
    cloneBtn.append(icon2);
    let tt = document.createTextNode("Clone");
    cloneBtn.appendChild(tt);

    firstTd.append(deleteBtn,cloneBtn);

    let inputContainer = createEl('div');
    inputContainer.classList = "col-sm-10";
    let firstInput = createEl('input');
    firstInput.classList = 'form-control';
    inputContainer.appendChild(firstInput);
    
    secondTd.append(inputContainer);

    
    let inputContainer2 = createEl('div');
    inputContainer2.classList = "col-sm-10";
    let secondInput = createEl('input');
    secondInput.classList = 'form-control';
    inputContainer2.appendChild(secondInput);
    
    thirdTd.append(inputContainer2);

    let radios = createEl('div');
    radios.classList = "col-sm-10 d-flex";
    
    const newCheck = createEl("input");
    newCheck.checked = true;
    newCheck.classList = "form-check-input"
    newCheck.id =  "gridRadios1"
    newCheck.name = `radio${counter}`
    newCheck.type = "radio";
    $(newCheck).css("margin-left", "2px");
    const newLabel = createEl("label");
    newLabel.innerText = "New";
    $(newLabel).css("margin-left", "1%");
    $(newLabel).append(newCheck);
                          
    const progressCheck = createEl("input");
    progressCheck.classList = "form-check-input"
    progressCheck.type = "radio";
    progressCheck.name = `radio${counter}`;
    progressCheck.id =  "gridRadios2"
    $(progressCheck).css("margin-left", "2px");
    const progressLabel = createEl("label");
    progressLabel.innerText = "In progress";
    $(progressLabel).css("margin-left", "1%");
    $(progressLabel).append(progressCheck);

    const confirmCheck = createEl("input");
    confirmCheck.classList = "form-check-input"
    confirmCheck.type = "radio";
    confirmCheck.name = `radio${counter}`;
    confirmCheck.id =  "gridRadios3"
    $(confirmCheck).css("margin-left", "2px");
    const confirmLabel = createEl("label");
    confirmLabel.innerText = "Confirmed";
    $(confirmLabel).css("margin-left", "1%");
    $(confirmLabel).append(confirmCheck);

    radios.appendChild(newLabel);
    radios.appendChild(progressLabel);
    radios.appendChild(confirmLabel);
    forthTd.appendChild(radios);


    tr.append(firstTd);
    tr.append(secondTd);
    tr.append(thirdTd);
    tr.append(forthTd)
    $("#table").append(tr);

    $(confirmCheck).click(()=>{
      confirmCheck.classList.add('checked')
      $(progressCheck).attr("disabled", true);
      $(newCheck).attr("disabled", true); 
      $(firstInput).attr("disabled", true);
      $(secondInput).attr("disabled", true);
      notConfirmed()
    })
    counter++;
    $(cloneBtn).click(function () {
      counter++;
      $(tr).after($(tr).clone(true));
      allRow();
      notConfirmed();
      
    });  
     
    allRow();
    notConfirmed(); 
  
  });
});

function allRow() {
  let rows = document.getElementById('all')
  rows.innerText = `All rows number:${$("tr").length - 1}` ;
}

function notConfirmed() {
  let notConfirmed = document.getElementById('notConfirmed');
  const all = $("tr").length - 1;
  const checked = $(".checked").length;
  const notChecked = all - checked;
  notConfirmed.innerText = `Not confirmed row number: ${notChecked}`;
}

function Remove(e) {
  console.log(e);
  if(e.target.classList.contains('deletBtn')){
      e.target.closest("tr").remove();
    }
}

function createEl(el) {
 return document.createElement(el);
}

