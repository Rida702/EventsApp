from django.db import models
import qrcode
from io import BytesIO
from django.core.files.base import ContentFile
from PIL import Image
from datetime import date
# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    qr_code = models.ImageField(blank=True,upload_to='qrcode/')
    date = models.DateField(default=date.today)
    
    def __str__(self):
        return str(self.name)
    
    def save(self, *args, **kwargs):
        if not self.qr_code:
            qrcode_img = qrcode.make(self.name)
            buffer = BytesIO()
            qrcode_img.save(buffer, 'PNG')
            self.qr_code.save(f'qr_code-{self.name}.png', ContentFile(buffer.getvalue()), save=False)
        super().save(*args, **kwargs)
    
    #def save(self, *args, **kwargs):
    #    if not self.qr_code:
    #        qrcode_img = qrcode.make(self.name)
    #        canvas = Image.new('RGB',(qrcode_img.pixelsize, qrcode_img.pixelsize),'white')
    #        canvas.paste(qrcode_img)
    #        fname = f'qr_code-{self.name}.png'
    #        buffer = BytesIO()
    #        canvas.save(buffer, 'PNG')
    #        self.qr_code.save(fname, ContentFile(buffer.getvalue()), save=False)
    #    super().save(*args,**kwargs)