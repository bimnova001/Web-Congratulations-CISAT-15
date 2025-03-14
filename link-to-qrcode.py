import qrcode
from tkinter import *
from PIL import Image, ImageDraw
import os 
import glob
def qr_code():
    qr = qrcode.QRCode(version=3, box_size=20, border=10, error_correction=qrcode.constants.ERROR_CORRECT_H)
    data = entry1.get()
    qr.add_data(data)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    os.makedirs("Qr-code", exist_ok=True)
    existing_files = glob.glob("Qr-code/qr_code*.png")
    next_index = len(existing_files) + 1 
    filename = f"Qr-code/qr_code{next_index}.png"
    try:
        img.save(filename)
        Label(window, text=f"สร้าง qr code ได้แล้ว! | path : {filename}", fg="green").pack()
        img.show()
    except Exception as e:
        Label(window, text=f"ไม่สามารถสร้าง QR Code ได้ | {str(e)}", fg="red").pack()


window = Tk()
window.title("QR Code Generator") 
window.geometry('500x300')

text1 = Label(window, text="ใส่ link เพื่อสร้าง QR code")
text1.pack()

entry1 = Entry(window, width=50)
entry1.pack()

b1 = Button(window, text="Generate QR code", command=qr_code)
b1.pack()

window.mainloop()
