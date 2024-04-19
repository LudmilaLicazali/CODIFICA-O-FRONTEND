import styles from "./MenuBtn.module.css"

function MenuBtn () {
  return (
 
    <section className={styles.menuBtn}>
      <ul class="nav nav-tabs  mt-4" id="romance-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="romance-tab" data-bs-toggle="tab" data-bs-target="#romance-tab-pane" type="button" role="tab" aria-controls="romance-tab-pane" aria-selected="true">Romance</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="drama-tab" data-bs-toggle="tab" data-bs-target="#drama-tab-pane" type="button" role="tab" aria-controls="drama-tab-pane" aria-selected="false">Drama</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="comedia-tab" data-bs-toggle="tab" data-bs-target="#comedia-tab-pane" type="button" role="tab" aria-controls="comedia-tab-pane" aria-selected="false">Comedia</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="acao-tab" data-bs-toggle="tab" data-bs-target="#acao-tab-pane" type="button" role="tab" aria-controls="acao-tab-pane" aria-selected="false">Ação</button>

        </li>
  </ul>
    </section>
    
  )
}

export default MenuBtn;
