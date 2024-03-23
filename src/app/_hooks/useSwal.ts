import Swal from "sweetalert2";

export default function useSwal(title: string, description: string) {
  let timerInterval: any;
  Swal.fire({
    title: title,
    html: description,
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      if (Swal.getPopup()) {
        const timer = Swal.getPopup()?.querySelector("b");
        timerInterval = setInterval(() => {
          if (timer)
            timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      }
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  })
  // .then((result) => {
  //   /* Read more about handling dismissals below */
  //   if (result.dismiss === Swal.DismissReason.timer) {
  //     console.log("I was closed by the timer");
  //   }
  // })
}