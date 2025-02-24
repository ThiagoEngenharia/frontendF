import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { FormDto } from '../../models/formdto';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form: formGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({

      nome_cliente: ['', [Validators.required, Validators.maxLength(100)]],
      vendedor: ['', [Validators.required, Validators.maxLength(100)]],
      numero_pedido: ['', [Validators.required, Validators.maxLength(50)]],
      nome_ambiente: ['', [Validators.required, Validators.maxLength(100)]],
      cor1: ['', [Validators.maxLength(255)]],
      cor2: ['', [Validators.maxLength(255)]],
      cor3: ['', [Validators.maxLength(255)]],
      modelo_iluminacao: ['', [Validators.maxLength(255)]],
      temperatura_iluminacao: ['', [Validators.maxLength(255)]],
      fornecedor_iluminacao: ['', [Validators.maxLength(255)]],
      espessura_espelho: ['', [Validators.maxLength(255)]],
      acabamento_espelho: ['', [Validators.maxLength(255)]],
      fornecedor_espelho: ['', [Validators.maxLength(255)]],
      espessura_vidro: ['', [Validators.maxLength(255)]],
      acabamento_vidro: ['', [Validators.maxLength(255)]],
      fornecedor_vidro: ['', [Validators.maxLength(255)]],
      modelo_puxador_superior: ['', [Validators.maxLength(255)]],
      acabamento_puxador_superior: ['', [Validators.maxLength(255)]],
      fornecedor_puxador_superior: ['', [Validators.maxLength(255)]],
      quantidade_puxador_superior: ['', [Validators.maxLength(255)]],
      modelo_puxador_inferior: ['', [Validators.maxLength(255)]],
      acabamento_puxador_inferior: ['', [Validators.maxLength(255)]],
      fornecedor_puxador_inferior: ['', [Validators.maxLength(255)]],
      quantidade_puxador_inferior: ['', [Validators.maxLength(255)]],
      modelo_estofado: ['', [Validators.maxLength(255)]],
      acabamento_estofado: ['', [Validators.maxLength(255)]],
      fornecedor_estofado: ['', [Validators.maxLength(255)]],
      instalador_estofado: ['', [Validators.maxLength(255)]],
      quantidade_estofado: ['', [Validators.maxLength(255)]],
      modelo_serralheria: ['', [Validators.maxLength(255)]],
      acabamento_serralheria: ['', [Validators.maxLength(255)]],
      fornecedor_serralheria: ['', [Validators.maxLength(255)]],
      instalador_serralheria: ['', [Validators.maxLength(255)]],
      modelo_tomada: ['', [Validators.maxLength(255)]],
      acabamento_tomada: ['', [Validators.maxLength(255)]],
      fornecedor_tomada: ['', [Validators.maxLength(255)]],
      quantidade_tomada: ['', [Validators.maxLength(255)]],
      modelo_interruptor: ['', [Validators.maxLength(255)]],
      acabamento_interruptor: ['', [Validators.maxLength(255)]],
      fornecedor_interruptor: ['', [Validators.maxLength(255)]],
      quantidade_interruptor: ['', [Validators.maxLength(255)]],
      modelo_passa_fio: ['', [Validators.maxLength(255)]],
      acabamento_passa_fio: ['', [Validators.maxLength(255)]],
      fornecedor_passa_fio: ['', [Validators.maxLength(255)]],
      quantidade_passa_fio: ['', [Validators.maxLength(255)]],
      modelo_porta_tempero: ['', [Validators.maxLength(255)]],
      acabamento_porta_tempero: ['', [Validators.maxLength(255)]],
      fornecedor_porta_tempero: ['', [Validators.maxLength(255)]],
      quantidade_porta_tempero: ['', [Validators.maxLength(255)]],
      modelo_lixeira: ['', [Validators.maxLength(255)]],
      acabamento_lixeira: ['', [Validators.maxLength(255)]],
      fornecedor_lixeira: ['', [Validators.maxLength(255)]],
      quantidade_lixeira: ['', [Validators.maxLength(255)]],
      modelo_tulha: ['', [Validators.maxLength(255)]],
      acabamento_tulha: ['', [Validators.maxLength(255)]],
      fornecedor_tulha: ['', [Validators.maxLength(255)]],
      quantidade_tulha: ['', [Validators.maxLength(255)]],
      modelo_divisor_gaveta: ['', [Validators.maxLength(255)]],
      acabamento_divisor_gaveta: ['', [Validators.maxLength(255)]],
      fornecedor_divisor_gaveta: ['', [Validators.maxLength(255)]],
      quantidade_divisor_gaveta: ['', [Validators.maxLength(255)]],
      modelo_tabua_passar: ['', [Validators.maxLength(255)]],
      acabamento_tabua_passar: ['', [Validators.maxLength(255)]],
      fornecedor_tabua_passar: ['', [Validators.maxLength(255)]],
      quantidade_tabua_passar: ['', [Validators.maxLength(255)]],
      modelo_divisor_acrilico: ['', [Validators.maxLength(255)]],
      acabamento_divisor_acrilico: ['', [Validators.maxLength(255)]],
      fornecedor_divisor_acrilico: ['', [Validators.maxLength(255)]],
      quantidade_divisor_acrilico: ['', [Validators.maxLength(255)]],
      modelo_rodape: ['', [Validators.maxLength(255)]],
      acabamento_rodape: ['', [Validators.maxLength(255)]],
      altura_rodape: ['', [Validators.maxLength(255)]],
      afastamento_rodape: ['', [Validators.maxLength(255)]],
      modelo_roda_teto: ['', [Validators.maxLength(255)]],
      altura_roda_teto: ['', [Validators.maxLength(255)]],
      afastamento_roda_teto: ['', [Validators.maxLength(255)]],
      sistema_porta_passagem: ['', [Validators.maxLength(255)]],
      corpo_porta_passagem: ['', [Validators.maxLength(255)]],
      acabamento_corpo_porta_passagem: ['', [Validators.maxLength(255)]],
      fechadura_porta_passagem: ['', [Validators.maxLength(255)]],
      quantidade_porta_passagem: ['', [Validators.maxLength(255)]],
      sistema_porta_deslizante: ['', [Validators.maxLength(255)]],
      corpo_porta_deslizante: ['', [Validators.maxLength(255)]],
      acabamento_corpo_porta_deslizante: ['', [Validators.maxLength(255)]],
      quantidade_porta_deslizante: ['', [Validators.maxLength(255)]],
      fechadura_porta_deslizante: ['', [Validators.maxLength(255)]],
      modelo_divisor_talher: ['', [Validators.maxLength(255)]],
      acabamento_divisor_talher: ['', [Validators.maxLength(255)]],
      fornecedor_divisor_talher: ['', [Validators.maxLength(255)]],
      quantidade_divisor_talher: ['', [Validators.maxLength(255)]],
      modelo_porta_perfil: ['', [Validators.maxLength(255)]],
      acabamento_porta_perfil: ['', [Validators.maxLength(255)]],
      corpo_porta_perfil: ['', [Validators.maxLength(255)]],
      cor_porta_perfil: ['', [Validators.maxLength(255)]],
      puxador_porta_perfil: ['', [Validators.maxLength(255)]],
      pedra_existente: ['', [Validators.maxLength(255)]],
      altura_existente: ['', [Validators.maxLength(255)]],
      altura_final_pedra: ['', [Validators.maxLength(255)]],
      responsavel_pedra: ['', [Validators.maxLength(255)]],
      modelo_box: ['', [Validators.maxLength(255)]],
      margem_box: ['', [Validators.maxLength(255)]],
      altura_final_box: ['', [Validators.maxLength(255)]],
      observacoes: ['', [Validators.maxLength(255)]],

    });
  }

  isFieldEmpty(field: string): boolean {
    return !this.form.get(field)?.value;  // Verifica se o valor do campo está vazio
  }

  onSubmit() {
    if (this.form.valid) {
      const formData: FormDto = this.form.value as FormDto;
      this.formService.postForm(formData).subscribe(response => {
        console.log('Sucesso:', response);
      }, error => {
        console.log('Erro:', error);
      });
    } else {
      console.log('Formulário inválido');
    }
  }

}
