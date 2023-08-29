export interface IbuttonUi {
  onClickBtn(e: React.MouseEvent): void | Promise<void>
  classNameAdd?: string
  children?: React.ReactNode
  disabledBtn?: boolean
}
